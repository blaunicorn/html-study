// 导入某个模块，并且使用其暴露的方法
import http from './http.js';
// 练习
console.log(1111)
let headBox = document.querySelector('#head-box'),
    navDetail = headBox.querySelector('.nav-detail'),
    headNav = headBox.querySelector('.head-nav');
document.addEventListener('mouseover', function (ev) {
    let target = ev.target, // 获取事件源
        ancestors = getAncestors(target)
    // console.log(target, ancestors)
    // 判断是否事件源在头部导航内
    if (ancestors.indexOf(headNav) > -1) {
        navDetail.style.display = 'block'
        navDetail.style.animation = 'headMove .2s both';
        // navDetail.offsetWidth //刷新浏览器的渲染队列
        // console.log(navDetail.offsetWidth)
        // navDetail.style.transform = 'translate(0px)'
        return
    }
    // 事件源是详情
    if (ancestors.indexOf(navDetail) > -1) return;
    // 其它事件源
    navDetail.style.display = 'none';
    navDetail.style.animation = 'none';
    // navDetail.style.transform = 'translateY(-10px)';
})

// 获取到他所有的祖先元素
const getAncestors = function getAncestors(element) {
    let arr = [element],
        parent = element.parentNode;
    while (parent) {
        arr.push(parent)
        parent = parent.parentNode
    }
    return arr;
}