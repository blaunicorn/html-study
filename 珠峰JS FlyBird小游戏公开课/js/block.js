function Block() {
    this.upDivWrap = null
    this.downDivWrap = null
    this.gapHeight = utils.randomNum(150, 150)  //上下管道之间的距离
    this.downHeight = utils.randomNum(0, 150) //下管道变化的高度
    this.upHeight = 305 - this.gapHeight - this.downHeight //上管道变化的高度

    //创建div的函数
    this.createDiv = function (url, height, positionType, left, top) {
        let newDiv = document.createElement('div')
        newDiv.style.width = '62px'
        newDiv.style.height = height + "px"
        newDiv.style.position = positionType
        newDiv.style.left = left + 'px'
        newDiv.style.top = top + 'px'
        newDiv.style.backgroundImage = url
        return newDiv
    }
}
Block.prototype.createBlock = function () {
    let upDIv1 = this.createDiv('url(img/up_mod.png)', this.upHeight)
    let upDIv2 = this.createDiv('url(img/up_pipe.png)', 60)
    this.upDivWrap = this.createDiv(null, null, "absolute", 450)  //一开始管道距离最左边450px
    this.upDivWrap.appendChild(upDIv1)
    this.upDivWrap.appendChild(upDIv2) //生成上方管道
    wrapBg.appendChild(this.upDivWrap)

    let downDiv1 = this.createDiv("url(img/down_pipe.png)", 60)
    let downDiv2 = this.createDiv("url(img/down_mod.png)", this.downHeight)
    this.downDivWrap = this.createDiv(null, null, "absolute", 450, 363 - this.downHeight) //最后一个参数表示下管道距离顶端的偏移量（423-60-this.downHeight）
    this.downDivWrap.appendChild(downDiv1)
    this.downDivWrap.appendChild(downDiv2)   //生成下方的管道
    wrapBg.appendChild(this.downDivWrap)
}
Block.prototype.moveBlock = function () {
    this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + "px"
    this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + "px"
}