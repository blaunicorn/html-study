import './head_box.js';
import './swiper_container.js';
// 控制更多按钮的动画效果
let commMoreArrowList = Array.from(document.querySelectorAll('.comm-more-arrow'));
console.log(commMoreArrowList)
commMoreArrowList.forEach(item => {
    let parent = item.parentNode;
    if (!parent) return;
    parent.addEventListener('mouseenter', function () {
        item.className = 'comm-more-arrow move';
        // item.classList.add('move');
    });
    parent.addEventListener('mouseleave', function () {
        item.className = 'comm-more-arrow';
        // item.classList.remove('move');
    });
});

// 测试axops
// let p = axios.get('http://127.0.1:8888/home_banner', {
//     params: {
//         lx: 0,
//         form: 'wx'
//     },
//     headers: {
//         // 'X-Token': 'xxx'
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// })
// console.log(p)
// p.then(response => {
//     // console.log(response)
//     return response.data
// }).then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })
