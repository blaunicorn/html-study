var max = 1500;  //滚动条走到的最大距离，走到这个位置时，shadow就不会再变化了
// 取元素离html顶部的距离
function getPos (obj) {
  var t = obj.offsetTop;
  while (obj = obj.offsetParent) {
    // 把元素的父级赋给元素，直到父级为undefined
    t += obj.offsetTop
  }
  return t;
}

(function () {
  // 遮罩层滚动显示透明度
  var shadow = document.querySelector('#shadow')
  var appointment = document.querySelector('.appointment')
  var appointmentBtn = document.querySelectorAll('.appointmentBtn')[1]
  function scroll () {
    var top = this.pageYOffset // 滚动条滚动距离
    // if (top <= max) {
    //   shadow.style.opacity = top / max
    // } else {
    //   shadow.style.opacity = 1
    // }
    shadow.style.opacity = top <= max ? top / max : 1

    appointment.style.visibility = top >= getPos(appointmentBtn) ? 'visible' : 'hidden'
  }
  window.addEventListener('scroll', scroll)
})();


(function () {
  // 右侧导航
  var navigator = document.querySelector('#navigator')
  var navigatorList = document.querySelectorAll('#navigator li')
  var anchor = document.querySelectorAll('.anchor')
  var cn = 0;  //当前
  var ln = 0 //上一个
  var pos = [0] // 存储所有锚点离html的距离，但是锚点的数量比右侧导航列表的数量少1，所以给一个数据站位
  for (let i = 0; i < navigatorList.length; i++) {
    pos.push(getPos(anchor[i]))  // 循环时 ，把所有的锚点离html的位置存储
    // console.log(anchor[i], pos)
    navigatorList[i].onmouseover = () => {
      console.log('mouseover')
      navigatorList[i].className = 'active'
    }
    navigatorList[i].onmouseout = () => {
      if (i != cn) {
        // 这个条件成立 说明离开的并不是当前元素
        navigatorList[i].className = ''
      }
    }
    navigatorList[i].onclick = () => {
      window.scrollTo({ top: pos[i], behavior: 'smooth' }) // 滚动条滚动到
      // if (i != cn) {
      //   // 这个条件成立 说明离开的并不是当前元素
      //   navigatorList[i].className = ''
      // }
    }
  }
  console.log(navigatorList)
  function scroll () {
    let top = this.pageYOffset;
    pos.forEach((value, index) => {
      if (top >= value) {
        cn = index; // 把cn的值设置成当前超过的锚点索引值
        // ln = index - 1 >= 0 ? index - 1 : 0
      }
    })
    // console.log(cn, ln)
    if (cn < navigatorList.length) {

      navigatorList[ln].classList = ''  // 上一个取消激活状态
      navigatorList[cn].classList = 'active'  // 当前变成激活状态
      ln = cn
    }


  }
  window.addEventListener('scroll', scroll)


})();

// tab 切换
(function () {
  var btns = document.querySelectorAll('.guest .tab button')  // 选项卡按钮
  var contents = document.querySelectorAll('.guest .tabContent .scroll') //  选项卡内容
  var ln = 1
  for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = () => {
      btns[ln].className = ''
      btns[i].className = 'active'
      contents[ln].classList.remove('active')
      contents[i].classList.add('active')
      ln = i
    }
  }
})();

// 抽奖
(function () {
  var prizeList = document.querySelectorAll('.festival .prize li:not(.btn)')  // 奖品选项
  var btn = document.querySelector('.festival .prize .btn')
  var cn = 0;
  var ln = 0;
  var time = 100;
  var interval = null
  var tiems = 1; // 剩余抽奖次数
  var sn = 7 // 抽到的奖品的索引
  var msg = ['哔哩哔哩幻星集Ⅱ2233金属书签', '哔哩哔哩日常系列2233Aloha篇抱枕', '纯甄白桃石榴小蛮腰', '哔哩哔哩小电视透明PVC背包', '哔哩哔哩小电视兔子系列连帽围巾', '哔哩哔哩真无线蓝牙耳机礼盒【猫王定制】', '谢谢参与', '哔哩哔哩小电视毛绒绒兔子包']

  btn.onclick = () => {
    if (tiems == 0) {
      alert('抽奖次数不足')
      return
    }

    interval = setInterval(() => {
      cn++;
      cn %= prizeList.length

      prizeList[ln].className = ''
      prizeList[cn].className = 'active'
      ln = cn

      setTimeout(() => {
        if (sn == cn) {
          // 走到了中奖的奖品了
          clearInterval(interval)
          prizeList[ln].className = '' //取消抽中奖品的class
          showMsg(sn)
        }
      }, 2000) //转5秒钟
    }, time)
  }
  function showMsg (cn) {
    var dialog = document.querySelector('#dialog')
    var title = document.querySelector('#dialog .title')
    var content = document.querySelector('#dialog .content p')
    var btns = document.querySelectorAll('#dialog button')

    dialog.className = 'show'
    title.innerHTML = cn == 5 ? '空空的' : '中奖了'
    content = cn == 5 ? '好遗憾，一定是姿势不对' : msg[cn]
    for (let index = 0; index < btns.length; index++) {
      btns[index].onclick = () => {
        dialog.className = ''
      }

    }
  }
})();

(function () {
  fetch('prizeList.json', {
    method: 'get',
    mode: 'cors',
    credentials: 'include'
  }).then(response => {
    return response.json()
  }).then((data) => {
    console.log(data)
    renderDom(data.data)
  })
  function renderDom (list) {
    var ul = document.querySelector('.festival .scroll ul')
    var li = ''
    ul.innerHTML = ''
    list.forEach(data => {
      li += `<li >
      ${data.name}<span >通过抽奖获得了</span>${data.gift_name}
    </li>`
    })
    ul.innerHTML = li
    ul.innerHTML += li
  }

  // 抽奖规则
  function rule () {
    var btn = document.querySelector('.festival .rule button')
    var drwaRule = document.querySelector('.festival .draw_rule')
    var close = document.querySelector('.festival .draw_rule .close')
    btn.onclick = () => {
      drwaRule.classList.add('show')
    }
    close.onclick = () => {
      drwaRule.classList.toggle('show')
    }
  }
  rule()
})();

