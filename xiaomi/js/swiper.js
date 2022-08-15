let wrap = document.getElementById('wrap');
let swiper = wrap.children[0];
let imgWidth = swiper.offsetWidth
let lis = swiper.children
let rgt = document.getElementById('right')
let lft = document.getElementById('left')

let pic = 0
// 克隆
swiper.appendChild(swiper.children[0].cloneNode(true))

var timeId = setInterval(rightClick, 3000)

// rgt.onclick = rightClick

function rightClick() {
    if(pic == lis.length - 1) {
        pic = 0
        swiper.style.left = 0 + 'px'
    }
    pic++
    // 调用函数
    animate(swiper, - pic * imgWidth)
}

function animate(element, target) {
    clearInterval(element.timeId)
    element.timeId = setInterval(function() {
        let current = element.offsetLeft
        let step = 10
        step = current < target ? step : -step
        current += step
        if(Math.abs(target - current) > Math.abs(step)) {
            element.style.left = current + 'px'
        }else {
            clearInterval(element.timeId)
            element.style.left = target + 'px'
        }
    },5)
}
