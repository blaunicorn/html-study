// 学习自 https://www.imooc.com/article/330098
const globalImageList = [
  "./static/images/1.jpg",
  "./static/images/2.jpg",
  "./static/images/3.jpg",
  "./static/images/4.jpg",
  "./static/images/5.jpg",
  "./static/images/6.jpg",
  "./static/images/7.jpg",
  "./static/images/8.jpg",
  "./static/images/9.jpg",
  "./static/images/10.jpg",
];
const TITLE = "模仿个羊了个羊";
window.onload = () => {
  const game = new Game(globalImageList);
};

class Game {
  //params: 素材列表，绑定的dom元素，
  constructor(originSource, bindElement) {
    // 核心代码
    this.doc = document;
    this.originSource = originSource;
    this.bindElement = bindElement || this.doc.body;
    // 存储随机打乱的元素
    this.source = [];
    // 存储点击的元素
    this.temp = {};
    // dom元素
    this.box = null; //存储消消乐块元素的容器盒子元素
    this.leftSource = null; //左边素材容器元素
    this.rightSource = null; //右边素材容器元素
    this.collection = null; //收集素材的容器元素
    // 需要调用bind方法修改this指向
    this.init().then(this.startHandler.bind(this)); //startHandler为游戏开始的核心逻辑函数，init初始化方法
  }
  // init方法就是做初始化的一些操作
  // 存储了document对象，存储了原始素材列表，以及绑定的dom元素，
  // 定义了source用来存储被打乱后的素材列表，以及temp用来存储点击的元素，方便做消除，添加阴影这些操作
  init() {
    return new Promise((resolve) => {
      const template = `<div class="cy-title" id="cy-title">${TITLE}</div><div class="cy-box" id="cy-box"></div>
        <div class="cy-left-source" id="cy-left-source"></div>
        <div class="cy-right-source" id="cy-right-source"></div>
        <div class="cy-collection" id="cy-collection"></div>`;
      const div = this.create("div");
      this.bindElement.insertBefore(div, document.body.firstChild);
      this.createElement(div, template);
      div.remove();
      resolve();
    });
  }

  // create方法其实也就是调用createElement方法来创建一个DOM元素
  create(name) {
    return this.doc.createElement(name);
  }
  // createElement方法传入2个参数，第一个参数是一个DOM元素，
  // 第二个参数是一个DOM元素字符串，表示在第一个DOM元素之前插入传入的模板元素。
  createElement(el, str) {
    return el.insertAdjacentHTML("beforebegin", str);
  }
  $(selector, el = this.doc) {
    return el.querySelector(selector);
  }
  $$(selector, el = this.doc) {
    return el.querySelectorAll(selector);
  }
  // resetHandler方法就是做重置的，
  // 重置用到的数据以及DOM元素的子节点。
  resetHandler() {
    this.box.innerHTML = "";
    this.leftSource.innerHTML = "";
    this.rightSource.innerHTML = "";
    this.collection.innerHTML = "";
    this.temp = {};
    this.source = [];
  }

  // startHandler是游戏开始的核心逻辑函数
  startHandler() {
    this.box = this.$("#cy-box");
    this.leftSource = this.$("#cy-left-source");
    this.rightSource = this.$("#cy-right-source");
    this.collection = this.$("#cy-collection");
    this.resetHandler();
    // 对素材数据做了一个添加和转换操作，randomList方法就是打乱素材列表的顺序
    for (let i = 0; i < 12; i++) {
      this.originSource.forEach((src, index) => {
        this.source.push({
          src,
          index,
        });
      });
    }
    this.source = this.randomList(this.source);
    console.log(this.source);
    // 添加块元素，并为每个块元素绑定点击事件
    for (let k = 5; k > 0; k--) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < k; j++) {
          const item = this.create("div");
          item.setAttribute("x", i);
          item.setAttribute("y", j);
          item.setAttribute("z", k);
          item.className = `cy-box-item cy-box-${i}-${j}-${k}`;
          item.style.position = "absolute";
          const image = this.source.splice(0, 1);
          // 1.44为item设置的宽度与高度
          item.style.left = 1.44 * j + 0.1 * k + "rem";
          item.style.top = 1.44 * i - 0.1 * k + "rem";
          // item.style.left = 1.44 * j + Math.random() * 0.1 * k + "rem";
          // item.style.top = 1.44 * i + Math.random() * 0.1 * k + "rem";
          item.setAttribute("index", image[0].index);
          item.style.backgroundImage = `url(${image[0].src})`;
          const clickHandler = () => {
            // 如果是在收集框里是不能够点击的
            if (item.parentElement.className === "cy-collection") {
              return;
            }
            // 没有阴影效果的元素才能够点击
            if (!item.classList.contains("cy-shadow")) {
              const currentIndex = item.getAttribute("index");
              if (this.temp[currentIndex]) {
                this.temp[currentIndex] += 1;
              } else {
                this.temp[currentIndex] = 1;
              }
              item.style.position = "static";
              // item.style.width = "5rem";
              console.log(item);
              // 移出并转移到新的位置
              this.collection.appendChild(item);
              // 重置阴影效果
              this.$$(".cy-box-item", this.box).forEach((item) =>
                item.classList.remove("cy-shadow")
              );
              this.createShadow();
              // 等于3个就消除掉
              if (this.temp[currentIndex] === 3) {
                setTimeout(() => {
                  this.$$(
                    `div[index="${currentIndex}"]`,
                    this.collection
                  ).forEach((item) => item.remove());
                  this.temp[currentIndex] = 0;
                }, 500);
              }
              let num = 0;
              for (let i in this.temp) {
                num += this.temp[i];
              }
              if (num > 7) {
                item.removeEventListener("click", clickHandler);
                this.gameOver();
              }
            }
          };
          item.addEventListener("click", clickHandler);
          this.box.append(item);
        }
      }
    }
    // 被遮盖看不到层级的两边发牌的块元素集合

    let len = Math.ceil(this.source.length / 2);
    this.source.forEach((item, index) => {
      let div = this.create("div");
      div.classList.add("cy-box-item");
      div.setAttribute("index", item.index);
      div.style.backgroundImage = `url(${item.src})`;
      div.style.position = "absolute";
      div.style.top = 0;
      if (index > len) {
        div.style.right = `${(5 * (index - len)) / 100}rem`;
        this.rightSource.appendChild(div);
      } else {
        div.style.left = `${(5 * index) / 100}rem`;
        this.leftSource.appendChild(div);
      }
      const clickHandler = () => {
        if (div.parentElement.className === "cy-collection") {
          return;
        }
        const currentIndex = div.getAttribute("index");
        if (this.temp[currentIndex]) {
          this.temp[currentIndex] += 1;
        } else {
          this.temp[currentIndex] = 1;
        }
        div.style.position = "static";
        this.collection.appendChild(div);
        if (this.temp[currentIndex] === 3) {
          this.$$(`div[index="${currentIndex}"]`, this.collection).forEach(
            (item) => item.remove()
          );
          this.temp[currentIndex] = 0;
        }
        let num = 0;
        for (let i in this.temp) {
          num += this.temp[i];
        }
        if (num >= 7) {
          div.removeEventListener("click", clickHandler);
          this.gameOver();
        }
      };
      div.addEventListener("click", clickHandler);
    });
    this.createShadow();
  }
  //  通过获取x,y,z属性设置的类名来确定是否需要添加阴影，
  //  因为通过这三个属性值可以确定元素的层级，
  //  如果不是在最上方，就不能够获取到该元素，所以就添加阴影。
  //  注意$$方法返回的是一个NodeList集合，所以可以拿到length属性。
  // 块的覆盖关系还有问题，需要再研究下https://github.com/liyupi/yulegeyu的代码
  // https://mp.weixin.qq.com/s/D_I1Tq-ofhKhlp0rkOpaLA
  createShadow() {
    this.$$(".cy-box-item", this.box).forEach((item, index) => {
      let x = item.getAttribute("x"),
        y = item.getAttribute("y"),
        z = item.getAttribute("z"),
        ele = this.$$(`.cy-box-${x}-${y}-${z - 1}`),
        eleOther = this.$$(`.cy-box-${x + 1}-${y + 1}-${z - 1}`);
      if (ele.length || eleOther.length) {
        item.classList.add("cy-shadow");
      }
    });
  }
  /**
   * 打乱顺序
   * @param {*} arr
   * @returns
   */
  randomList(arr) {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i >= 0; i--) {
      const index = Math.floor(Math.random() * i + 1);
      const next = newArr[index];
      newArr[index] = newArr[i];
      newArr[i] = next;
    }
    return newArr;
  }
  // 如果达到了7个代表槽位满了，然后游戏结束，并且移除块元素的点击事件。
  gameOver() {
    const self = this;
    cyConfirm({
      title: "温馨提示",
      content: "游戏结束，别灰心，你能行的！",
      sureText: "重新开始",
      isClickModal: false,
      sure(context) {
        context.close();
        self.startHandler();
      },
    });
  }
}
