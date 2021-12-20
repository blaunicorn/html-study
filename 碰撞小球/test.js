/*
*小球碰撞
* create by wcy

*/
// 方式一
document.getElementsByTagName("title")[0].innerText = '需要设置的值';
//  方式二 document.title
window.onfocus = function () {
  document.title = '碰撞小球';
};
window.onblur = function () {
  document.title = '等你回来——碰撞小球';
};

// 监听resize 变化

let ball_canvas = document.querySelector("#ball"),
  container = document.querySelector(".container");
console.log(ball_canvas, container)
let width = container.clientWidth,
  height = container.clientHeight;
console.log(width, height)
ball_canvas.width = width;
ball_canvas.height = height;
let ctx = ball_canvas.getContext("2d")
window.addEventListener('resize', throttle(onWindowResize))
function onWindowResize () {
  // width = window.innerWidth;
  // height = window.innerHeight;
  // ball_canvas.width = width;
  // ball_canvas.height = height;
  // console.log(width, height)
}
let mouse = {
  x: 0,
  y: 0,
}
addEventListener("mousemove", function (e) {
  mouse.x = e.x
  mouse.y = e.y
})
// 定义小球类
class _ball {
  constructor (x, y, speedx = 0, speedy = 0, radius, color) {
    this.x = x
    this.y = y
    this.speedx = speedx
    this.speedy = speedy
    this.radius = radius;
    this._radius = radius;
    this.color = color;
    this.maxradius = 40;
  }
  draw () {
    // ctx.clearRect(0,0,width,height)
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)

    ctx.closePath()
    ctx.fill()

  }
  collision () {
    // 碰撞墙壁检测
    if (this.x > width - this.radius || this.x < this.radius) {
      this.speedx = -this.speedx
    }
    this.x = this.x + this.speedx
    if (this.y > height - this.radius || this.y < this.radius) {
      this.speedy = -this.speedy
    }
    this.y = this.y + this.speedy
  }
  mouseBig () {
    // 鼠标交互
    if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50) {
      this.radius += 1
    } else {
      this.radius -= 2
    }
    if (this.radius <= this._radius) {
      this.radius = this._radius
    }
    if (this.radius >= this.maxradius) {
      this.radius = this.maxradius
    }
  }
  update () {
    // console.log("执行")
    // 更新小球，让小球动起来 也就是更新xy坐标
    this.collision()
    this.mouseBig()
    this.draw()
  }
}
// 在画布上生成小球
let balls = []
function init (num = 0) {
  console.log(width, height)
  // 生成不重叠的动态小球
  for (let i = 0; i < num; i++) {
    let { x, y, radius, color } = getOnlyBall(balls)
    speedx = 1.5 - getnum(0, 3)
    speedy = 1.5 - getnum(0, 3)
    balls.push(new _ball(x, y, speedx, speedy, radius, color))
  }
}
init(20);
console.log(balls)
animate();

function animate () {
  ctx.clearRect(0, 0, width, height)
  balls.forEach((ball, ballIndex) => {
    let arr = [...balls.slice(0, ballIndex), ...balls.slice(ballIndex + 1)];
    arr.forEach((item) => {
      if (getDistance(ball.x, ball.y, item.x, item.y) <= (ball.radius + item.radius)) {
        console.log('碰撞')
        ball.speedx = -ball.speedx
        ball.speedy = -ball.speedy
      }
    })
  })
  balls.forEach((ball) => {
    ball.update()
  })

  requestAnimationFrame(animate)
}
// 生成不重叠的静态小球数组
function getOnlyBall (balls = []) {

  let radius = getnum(10, width / 50)
  let color = `rgb(${parseInt(getnum(0, 255))},${parseInt(getnum(0, 255))},${parseInt(getnum(0, 255))})`
  let x = getnum(radius, width - radius)
  let y = getnum(radius, height - radius)
  return {
    x,
    y,
    radius,
    color,
  }
}
// 获取随机区间数
function getnum (min = 0, max = 1) {
  return min + Math.random() * (max - min)
}
// 三角定律判断距离
function getDistance (x, y, x1, y1) {
  return Math.sqrt(Math.pow((x - x1), 2) + Math.pow((y - y1), 2))
}

// 节流
function throttle (func, wait = 400) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(context, args)
      }, wait)
    }

  }
}