let bird = {
    flyTime: null,
    wingTime: null,
    ele: document.createElement('div'),
    addBird: function(parentObj) {
        console.log(this)
        this.ele.className = 'birdStyle'
        parentObj.appendChild(this.ele)
    },
    fallSpeed: 0, // 小鸟的下落速度
    flyBird: function() {
        bird.flyTime = setInterval(fly, 40)
        function fly() {
            bird.ele.style.top = bird.ele.offsetTop + bird.fallSpeed++ + 'px'
            if (bird.ele.offsetTop < 0) {
                bird.fallSpeed = 2
            }
            if (bird.ele.offsetTop >= 399) {
                bird.fallSpeed = 0
                bird.ele.style.top = 399 + "px"
                clearInterval(bird.flyTimer)
                clearInterval(bird.wingTimer)
            }
        }
    }
}