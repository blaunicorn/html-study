/*
 * @Author: 宋杰
 * @Date: 2021-11-25 23:10:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-26 10:11:00
 * @Description:  气泡图
 */
/*
生成弹性小球碰撞工具
I am kmh0228
QQ:1150123276
2017-06-20
*/
/*
使用方法说明
  1.此插件纯原生js编写，使用时引入此collision.js即可。
  2.生成容器，假设现有一个id为container的盒子做容器。
    var oB=new BallBox(‘container’);
      注：容器必须是有宽高的定位元素。尽量不要有边线。
  3.生成小球
    var ball=new Ball();
  4.把小球放入容器
    oB.addBall(ball);
  5.调用容器的ballRun方法，让小球开始运动。注意：此运动是完全弹性碰撞，不会损失能量。
    oB.ballRun();
  over
	
  参数说明
    容器参数  new BallBox(‘container’，opts);
      opts:{width:num,height:num}//没有边线和padding的时候可不写。有的情况下需要把容器真实宽高填进去。
    小球参数 new Ball(opts);
      opts:{
        e:小球DOM元素/原生对象，可填入页面DOM，不写则生成新DIV DOM,
        b:小球半径 默认30;包含边
        c:小球背景颜色/图片， 默认'pink'
        borderWidth:边线宽度 默认0
        borderColor:边线颜色 默认#000
        x:小球中心点的横坐标 默认为半径
        y:小球中心点的纵坐标 默认为半径
        sx:小球在x轴方向速度每30ms，默认3
        sy:小球在y轴方向速度每30ms，默认3
        m:小球的质量，默认b/30;
        html:小球内部的内容，不填则不会改变DOM本身的内容。
        fontSize:字体大小，默认12;
        opa:小球透明度，默认1；
        callBack:function  碰撞时的回掉函数，参数为碰撞的总次数，方法中this指向此球对象
      }
    小球方法：
        setB(num)//重新设置小球半径
        setC(str);//重新设置小球背景颜色/图片
        setBorderWidth(n);//重新设置小球边线宽度
        setBorderColor(str);//重新设置边线颜色
        setM(n);//重设小球质量,如果不给参数，则按照半径重新默认质量
        setHTML(str);//重设小球内容
        setOpa(n);//重设小球透明度
 */

// 创建容器方法
// a：容器的id 
// b: 容器的宽高
// 把id传进来获取到 DOM
// 获取到 宽高
// 创建 child=[]  应该是用来放小球的DOM的数组
function BallBox(a, b2) {
  let c = this.container = document.getElementById(a);
  let b = this.opts = b2 || {};
  this.width = b.width || c.offsetWidth;
  this.height = b.height || c.offsetHeight;
  this.child = []
}

// 把小球放入容器
// 在 BallBox对象上添加一个属性 addBall:function
// a 是气球的 DOM实例
// e.parentNode 对象的形式返回指定节点的父节点
// 判断这个元素的父节点和容器是不是相等
// appendChild() 方法向节点添加最后一个子节点。
// a.e 就是外面传进来的气球DOM
BallBox.prototype.addBall = function (a) {
  this.child.push(a);
  if (a.e.parentNode != this.container) {
    this.container.appendChild(a.e)
  }
};

// 外部调用 调用容器的ballRun方法，让小球开始运动。
// 删除定时器 clearInterval(this.ballRunTimer);
// this 容器DOM
// w 容器的宽
// h 容器的高
// isColl 判断两个气泡有没有相遇 当另个球的半径的距离 大于 两个气球的距离 false
// coll 计算气泡相撞后各自的运动角度和速度
// ballRunTimer 定时器
BallBox.prototype.ballRun = function () {
  clearInterval(this.ballRunTimer);
  var g = this;
  var w = this.width;
  var h = this.height;
  var k = this.isColl;
  var l = this.coll;

  // a g.child 用来放小球的DOM的数组
  // c 数组的长度
  this.ballRunTimer = setInterval(function () {
    var a = g.child;
    var c = a.length;
    // 触发气球移动
    for (var i = 0; i < c; i++) {
      a[i].foot()
    }

    // 判断气泡的活动范围
    // d 每个小气球
    // b 小球的半径
    // x 小球中心点的横坐标 默认为半径
    // y:小球中心点的纵坐标 默认为半径
    // sx:小球在x轴方向速度每30ms，默认3
    // sy:小球在y轴方向速度每30ms，默认3
    for (let i = 0; i < c; i++) {
      var d = a[i];
      var b = d.b;
      // 如果气球的圆心的x轴到坐标轴O的距离小于 本身的半径
      // 就让 x的距离等于 半径
      // 让气球在x轴上的移动速度相反方向移动 d.sx *= -1
      if (d.x < b) {
        d.x = b;
        d.sx *= -1
      }
      // 同上
      if (d.y < b) {
        d.y = b;
        d.sy *= -1
      }

      // e 容器的宽度 - 气泡的半径
      // 如果气泡圆心在x轴上的值 大于 容器 - 自身的长度
      // 就让 x的距离等于 半径
      // 让气球在x轴上的移动速度相反方向移动 d.sx *= -1
      var e = w - b;
      if (d.x > e) {
        d.x = e;
        d.sx *= -1
      }
      // f 容器的高度 - 气泡的半径
      // 同上
      var f = h - b;
      if (d.y > f) {
        d.y = f;
        d.sy *= -1
      }
    }

    // 让气泡和其他气泡对比
    // k: this.isColl 判断两个气泡有没有相遇 碰撞时为true
    // l: this.coll 计算气泡相撞后各自的运动角度和速度
    // callBack 碰撞后触发的函数
    for (let i = 0; i < c; i++) {
      for (let j = i + 1; j < c; j++) {
        if (k(a[i], a[j])) {
          l(a[i], a[j]);
          a[i].collNum++;
          a[i].callBack(a[i].collNum);
          a[j].collNum++;
          a[j].callBack(a[j].collNum)
        }
      }
    }
  }, 30)
};

// 删除球移动的定时器
BallBox.prototype.ballStop = function () {
  clearInterval(this.ballRunTimer)
};

// 计算气泡相撞后各自的运动角度和速度
// a 气泡本身
// b 其他气泡
// c: 其他气泡在x轴上的距离 - 本气泡在x轴上的距离
// d: 其他气泡在y轴上的距离 - 本气泡在y轴上的距离
// e: 其他气泡在X轴上的移动速度 - 本气泡在x轴上的移动速度
// f: 其他气泡在y轴上的移动速度 - 本气泡在y轴上的移动速度
// g: 计算两个气泡相撞后 该点与正 X 轴之间的弧度角
// h: 计算两个气泡在x轴上和y轴上的距离取反的角度
// i: Math.abs 得到一个绝对值
// PI就是圆周率π，PI是弧度制的π,也就是180°
BallBox.prototype.coll = function (a, b) {
  var c = b.x - a.x;
  var d = b.y - a.y;
  var e = b.sx - a.sx;
  var f = b.sy - a.sy;
  var g = Math.atan2(f, e);
  var h = Math.atan2(-d, -c);
  var i = Math.abs(h - g);
  var D = Math.PI / 2;
  if (i <= 3 * D && i >= D) return;
  var j = a.m || 1;
  var k = b.m || 1;
  var l = j + k;
  var m = ((j - k) * a.sx + 2 * k * b.sx) / l;
  var n = ((k - j) * b.sx + 2 * j * a.sx) / l;
  var o = ((j - k) * a.sy + 2 * k * b.sy) / l;
  var p = ((k - j) * b.sy + 2 * j * a.sy) / l;
  a.sx = m;
  a.sy = o;
  b.sx = n;
  b.sy = p
};

// 判断两个气泡有没有相遇
// 当另个球的半径的距离 大于 两个气球的距离 false
// 如果两个气泡有一个是 stopfoot 是 false 就不触发
// Math.pow() 函数返回基数（base）的指数（exponent）次幂
// d: a 在x轴上的距离 - b 在x轴上的距离   的 2次幂 + a 在y轴上的距离 - b 在y轴上的距离   的 2次幂
// c: a 的半径 + b 的半径 的 2次幂
BallBox.prototype.isColl = function (a, b) {
  if (a.stopfoot || b.stopfoot) return false;
  var d = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
  var c = Math.pow(a.b + b.b, 2);
  return d < c
};

// ==================================================
// 初始化气球的参数
// this 指向这个 a 小球初始化对象 function Ball () {}
// a 气泡的初始化参数对象
// --d 不了解
// b 小球的半径
// f 气泡的边框
// g 气泡的边框的颜色
// x 小球中心点的横坐标 默认为半径
// y 小球中心点的纵坐标 默认为半径
// h 小球在x轴方向速度每30ms，默认3
// i 小球在y轴方向速度每30ms，默认3
// m 小球的质量，默认b/30
// c 小球背景颜色/图片， 默认'pink'
// e 小气的DOM实例 默认动创建一个div createElement() 方法通过指定名称创建一个元素
// j 气球内部的文字
// k 小球透明度，默认1
// l 气球的文字大小
// n 碰撞时的回掉函数
// collNum 要传入 callBack(n) 做一些操作
// this.initStyle();  初始化气球的css样式
// 		this.setPos() 小球的移动css样式
// this.addEvent() 鼠标移入 移出
// 		stopFoot() 鼠标移入 触发
// 		startFoot() 鼠标移出 触发
function Ball(a2) {
  let a = this.json = a2 || {};
  let d = this.type = a.type || 'ball';
  let b = this.b = a.b || 30;
  let f = this.borderWidth = a.borderWidth || 0;
  let g = this.borderColor = a.borderColor || '#000';
  let x = this.x = a.x || b;
  let y = this.y = a.y || b;
  let h = this.sx = a.sx || 3;
  let i = this.sy = a.sy || 3;
  let m = this.m = a.m || (b / 30);
  let c = this.c = a.c || 'pink';
  let e = this.e = a.e || document.createElement('div');
  let j = this.html = a.html;
  let k = this.opa = a.opa || 1;
  let l = this.fontSize = a.fontSize || 12;
  let n = this.callBack = a.callBack || function () { };
  this.collNum = 0;
  this.initStyle();
  this.addEvent()
}

// 初始化气球的css样式
// this 是 小气球 Ball()
// b 小球的半径
// s 小球的所有样式 CSSStyleDeclaration
// 让小球绝对定位 (父元素 开启的绝对定位)
// top left 默认为 0
// 高度 宽度 为 (半径-边框) x 2 加 'px' 转为字符串
// 边框曲线为 50%
// background：c 小球背景颜色/图片， 默认'pink'
// backgroundSize 背景大小 cover 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。
// border 边框 (宽度 实现 颜色)
// opacity 透明度
Ball.prototype.initStyle = function () {
  var b = this.b;
  var s = this.e.style;
  s.position = 'absolute';
  s.top = s.left = 0;
  s.width = s.height = (b - this.borderWidth) * 2 + 'px';
  s.borderRadius = '50%';
  s.background = this.c;
  s.backgroundSize = 'cover';
  s.border = this.borderWidth + 'px solid ' + this.borderColor;
  s.opacity = this.opa;

  // 不了解
  // 气球DOM的文字内容
  // 文字居中
  // 行高 等于 (半径-边框) x 2 加 'px' 转为字符串
  // 文字大小
  if (this.html) {
    console.log('this.html========', this.html);
    this.e.innerHTML = this.html;
    s.textAlign = 'center';
    s.lineHeight = (b - this.borderWidth) * 2 + 'px';
    s.fontSize = this.fontSize + 'px'
  }
  this.setPos()
};

// onmouseenter 鼠标移入 事件在鼠标指针移动到元素上时触发。
// 		stopFoot()
// onmouseout 鼠标移出 当鼠标指针移出元素或其子元素之一时，会发生 onmouseout 事件。
// 		startFoot()
Ball.prototype.addEvent = function () {
  var a = this;
  // this.e.onmouseenter = function () {
  // 	a.stopFoot()
  // };
  // this.e.onmouseout = function () {
  // 	a.startFoot()
  // }
  this.e.onclick = function () {
    window.open('https://www.baidu.com/', '_blank');
  }
};

// this.stopfoot 是判断气球半径要不要变大 移入的气球就 zindex:999 不触发移动
// x:小球中心点的横坐标 默认为半径
// y:小球中心点的纵坐标 默认为半径
// sx:小球在x轴方向速度每30ms，默认3
// sy:小球在y轴方向速度每30ms，默认3
// this.setPos() 小球的移动css样式
Ball.prototype.foot = function (n2) {
  if (this.stopfoot) return;
  var n = n2 || 1;
  this.x += this.sx * n;
  this.y += this.sy * n;
  this.setPos()
};

// 鼠标移出
// --this.stopfoot false 是判断气球半径要不要变大
// zindex 1
Ball.prototype.startFoot = function () {
  this.stopfoot = false;
  this.e.style.zIndex = 1
};

// 鼠标移入
// --stopfoot true 是判断气球半径要不要变大
// zindex 999
Ball.prototype.stopFoot = function () {
  this.stopfoot = true;
  this.e.style.zIndex = 999
};

// 小球的移动css样式
// b 小球的半径
// parseInt 数字取整
// x 小球中心点的横坐标 默认为半径
// y 小球中心点的纵坐标 默认为半径
// transform 该属性允许我们对元素进行旋转、缩放、移动或倾斜。
// transform:'translate(' + x + 'px,' + y + 'px)' x轴的移动 y轴的移动
// -webkit 是表示针对 safari 浏览器支持，-ms表示针对 IE 浏览器支持。
Ball.prototype.setPos = function () {
  var b = this.b;
  var x = parseInt(this.x - b);
  var y = parseInt(this.y - b);
  this.e.style.transform = 'translate(' + x + 'px,' + y + 'px)';
  this.e.style.webkitTransform = 'translate(' + x + 'px,' + y + 'px)'
};

// ================== 小球方法 可以在callBack 碰撞后触发的函数你面添加===================
// setB(num)//重新设置小球半径
Ball.prototype.setB = function (n) {
  var b = this.b = n;
  var s = this.e.style;
  s.width = s.height = (b - this.borderWidth) * 2 + 'px';
  s.lineHeight = (b - this.borderWidth) * 2 + 'px';
  this.setPos()
};

// setC(str);//重新设置小球背景颜色/图片
Ball.prototype.setC = function (a) {
  var c = this.c = a;
  this.e.style.background = c;
  this.e.style.backgroundSize = 'cover'
};

// setBorderWidth(n);//重新设置小球边线宽度
Ball.prototype.setBorderWidth = function (n2) {
  var n = this.borderWidth = n2;
  var s = this.e.style;
  s.width = s.height = (this.b - n) * 2 + 'px';
  s.lineHeight = (this.b - n) * 2 + 'px';
  s.border = n + 'px solid ' + this.borderColor
};

// setBorderColor(str);//重新设置边线颜色
Ball.prototype.setBorderColor = function (a2) {
  var a = this.borderColor = a2;
  this.e.style.border = this.borderWidth + 'px solid ' + a
};

// setM(n);//重设小球质量,如果不给参数，则按照半径重新默认质量
Ball.prototype.setM = function (n) {
  this.m = n || this.b / 30
};

// setHTML(str);//重设小球内容
Ball.prototype.setHTML = function (a) {
  var b = this.html = a;
  var s = this.e.style;
  this.e.innerHTML = b;
  s.textAlign = 'center';
  s.lineHeight = (this.b - this.borderWidth) * 2 + 'px';
  s.fontSize = this.fontSize + 'px'
};

// setOpa(n);//重设小球透明度
Ball.prototype.setOpa = function (n) {
  var a = this.opa = n;
  this.e.style.opacity = n
};

// 导出
export { BallBox, Ball }; // 导出变量列表