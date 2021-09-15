let bird = {
    flyTime: null,
    wingTime: null,
    ele: document.createElement("div"),
    addBird: function(parentObj) {
        console.log(this)
        this.ele.className = "birdStyle"
        parentObj.appendChild(this.ele)
    },
    fallSpeed: 0, // 小鸟的下落速度
    flyBird: function() { //控制小鸟飞翔下落的函数
        bird.flyTimer = setInterval(fly, 40);
        function fly() {
            bird.ele.style.top = bird.ele.offsetTop + bird.fallSpeed++ + "px"
            if (bird.ele.offsetTop < 0) {
                bird.fallSpeed = 2
            }
            if (bird.ele.offsetTop >= 399) {
                bird.fallSpeed = 0
                bird.ele.style.top = 399 + "px"
                clearInterval(bird.flyTimer)
                clearInterval(bird.wingTimer)
            }
            if (bird.fallSpeed > 12) {
                bird.fallSpeed = 12
            }
        }
    },
    wingWave: function() { //控制小鸟煽动翅膀的函数
        let up = ['url(img/up_bird0.png', 'url(img(up_bird1.png)']
        let down = ['url(img/down_bird0.png', 'url(img(down_bird.png']
        let i = 0, j = 0
        bird.wingTimer =setInterval(wing, 120)

        function wing() {
            if (bird.fallSpeed > 0) {
                bird.ele.style.backgroundImage = down[i++]
                if (i===2) {
                    i = 0
                }
            }
            if (bird.fallSpeed < 0) {
                bird.ele.style.backgroundImage = up[j++]
                if (j===2) {
                    j = 0
                }
            }
        }
        
    }
}