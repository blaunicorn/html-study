// question 1
var a = 10;
(function () {
  console.log(a)
  a = 5
  console.log(window.a)
  var a = 20;
  console.log(a)
})()

// underfined 10 20

// question 2
let arr = ['a', 'b', 'c']
let b = arr.splice(1, 2)
console.log(b)
console.log(arr)
// ['b','c'] ['a']

// question 3
let arr = ['a', 'b', 'c']
let b = arr.slice(1, 2)
console.log(b)
console.log(arr)
// ['b']
// ['a', 'b', 'c']

// question 4
let arr = new Set([1, 2, 3, 3])
console.log(arr)
console.log(arr.has(1))
// Set(3) { 1, 2, 3 }
// true

// question 5
const promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})
promise.then(() => {
  console.log(3)
})
console.log(4)
// 1
// 2
// 4
// 3

// quesetion 6
Promise.resolve().then(() => {
  console.log('p1')
  setTimeout(() => {
    console.log('t1')
    Promise.resolve().then(() => {
      console.log('p4')
    })
  }, 0)
})
setTimeout(() => {
  console.log('t2')
  Promise.resolve().then(() => {
    console.log('p2')
    setTimeout(() => {
      console.log('t3')
    })
  })
  Promise.resolve().then(() => {
    console.log('p5')
  })
}, 0)
// 1.宏任务：包括整体代码script，setTimeout，setInterval、I/O、UI 交互事件、setImmediate(Node.js 环境)；
// 2.微任务：Promise、MutaionObserver、process.nextTick(Node.js 环境)
// Promise是宏任务(同步执行)，但Promise 的回调函数属于异步任务，会在同步任务之后执行(比如说 then、 catch 、finally)。
// p1
// t2
// p2
// p5
// t1
// p4
// t3

//question 7
行内元素，块级元素与空元素
行内元素：a、b、span、img、input、strong、select、label、em、button、textarea

块级元素：div、ul、li、dl、dt、dd、p、h1 - h6、blockquote

空元素: br、meta、hr、link、input、img




块级元素的特点：

1.总在新行上开始，占据一整行
2.默认情况下，其宽度自动填满其父元素宽度
3.宽度始终是与浏览器宽度一样，与内容无关
4.它可以容纳内联元素和其他块元素
5.display属性为block



块级元素的垂直相邻外边距margin会合并。


行内元素的特点：

1.和其他元素都在一行上
2.高，行高及外边距和内边距部分可改变
3.宽度只与内容有关
4.行内元素只能容纳文本或者其他行内元素
5.display属性为inline

水平方向的padding - left、padding - right、margin - left、margin - right都产生边距效果，
但竖直方向的padding - top、padding - bottom、margin - top、margin - bottom却不会产生边距效果。
不可以设置宽高，其宽度随着内容增加，高度随字体大小而改变，内联元素可以设置外边界，但是外边界不对上下起作用，只能对左右起作用。



空元素的特点：

 

没有内容的 HTML 内容被称为空元素。空元素是在开始标签中关闭的。
<br /> 就是没有关闭标签的空元素（<br /> 标签定义换行）。
在 XHTML、XML 以及未来版本的 HTML 中，所有元素必须被关闭。
在开始标签中添加斜杠，比如 < br />，是关闭空元素的正确方法，HTML、XHTML 和 XML 都接受这种方式。
即使 < br > 在所有浏览器中都是有效的，但使用 < br /> 其实是更长远的保障。

// question 8 
第一种是W3c标准的盒子模型（标准盒模型） 、第二种IE标准的盒子模型（怪异盒模型）
标准盒模型下盒子的大小 = content + border + padding + margin
怪异盒模型下盒子的大小 = width（content + border + padding） + margin