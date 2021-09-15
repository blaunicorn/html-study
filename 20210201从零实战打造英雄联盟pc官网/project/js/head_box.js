// 基于事件委托实现导航详情的控制


// 原版本
let headBox = document.querySelector('#head-box'),
    navDetail = headBox.querySelector('.nav-detail'),
    headNav = headBox.querySelector('.head-nav');

// 获取到他所有的祖先元素
const getAncestors = function getAncestors(element) {
    let arr = [element],
        parent = element.parentNode;
    while (parent) {
        arr.push(parent);
        parent = parent.parentNode;
    }
    return arr;
};

document.addEventListener('mouseover', function (ev) {
    let target = ev.target,
        ancestors = getAncestors(target);
    // 事件源是头部导航
    if (ancestors.indexOf(headNav) > -1) {
        navDetail.style.display = 'block';
        navDetail.style.animation = 'headMove .2s both';
        /* navDetail.offsetWidth; //刷新浏览器的渲染队列
        navDetail.style.transform = 'translateY(0px)'; */
        return;
    }

    // 事件源是详情
    if (ancestors.indexOf(navDetail) > -1) return;

    // 其它事件源
    navDetail.style.display = 'none';
    navDetail.style.animation = 'none';
    // navDetail.style.transform = 'translateY(-10px)';
});