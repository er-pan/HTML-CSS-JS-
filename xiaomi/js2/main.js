// top1
let liList = document.querySelectorAll(".left-ul li");
let t1 = document.querySelectorAll(".t1");
for (let i = 0; i < liList.length; i++) {
    liList[i].onmouseover = () => {
        liList[i].style.backgroundColor = "#ff6700";
        t1[i].style.height = "460px";
        t1[i].style.overflow = "none";
        t1[i].style.zIndex = "1000"
        t1[i].onmouseover = () => {
            t1[i].style.height = "460px";
            t1[i].style.overflow = "none";
            t1[i].style.zIndex = "1000"
        };
        t1[i].onmouseout = () => {
            t1[i].style.height = "0px";
            t1[i].style.overflow = "hidden";
            t1[i].style.zIndex = "990"
        };
    };
    liList[i].onmouseout = () => {
        liList[i].style.backgroundColor = "transparent";
        t1[i].style.height = "0px";
        t1[i].style.overflow = "hidden";
        t1[i].style.zIndex = "990"
    };
}

// 按钮
let toLeft = document.querySelector(".to-left");
let toRight = document.querySelector(".to-right");
toLeft.onmouseover = () => {
    toLeft.style.backgroundColor = "rgba(255, 254, 254, 0.3)";
};
toLeft.onmouseout = () => {
    toLeft.style.backgroundColor = "transparent";
};
toRight.onmouseover = () => {
    toRight.style.backgroundColor = "rgba(255, 254, 254, 0.3)";
};
toRight.onmouseout = () => {
    toRight.style.backgroundColor = "transparent";
};
// 左按钮按下
toLeft.onmousedown = () => {
    clearInterval(timer);
    timer = null;
    leftClick();
};
// 左按钮释放
toLeft.onmouseup = () => {
    timer = setInterval(rightClick, 3000);
};
// 右按钮按下
toRight.onmousedown = () => {
    clearInterval(timer);
    timer = null;
    rightClick();
};
// 右按钮释放
toRight.onmouseup = () => {
    timer = setInterval(rightClick, 3000);
};
// 轮播图
let imgArr = document.querySelectorAll(".lunbo img");
let imgNum = imgArr.length;
// 当前图片索引
let index = 0;
// 跟踪上一张图片索引
let preIndex = index;
// 当前图片透明度
let opacityValue = 0;
// 上一张图片透明度
let preOpacityValue = 1;
// 初始化第一张图片显示
imgArr[index].style.opacity = "1";

let timer = null;
timer = setInterval(rightClick, 3000);

function rightClick() {
    preIndex = index;
    index++;
    if (index > imgNum - 1) {
        index = 0;
    }
    // 上一张图片淡出
    showImg();
    // 下一站图片淡入
    hideImg();
    // 改变小圆点颜色
    changColor()
}
function leftClick() {
    preIndex = index;
    index--;
    if (index < 0) {
        index = imgNum - 1;
    }
    // 上一张图片淡出
    showImg();
    // 下一站图片淡入
    hideImg();
    // 改变小圆点颜色
    changColor()
}

function showImg() {
    opacityValue = 0;
    let time = setInterval(() => {
        opacityValue += 0.05;
        if (opacityValue >= 1) {
            opacityValue = 1;
            clearInterval(time);
        }
        imgArr[index].style.opacity = opacityValue;
    }, 40);
}
function hideImg() {
    preOpacityValue = 1;
    let time = setInterval(() => {
        preOpacityValue -= 0.05;
        if (preOpacityValue <= 0) {
            preOpacityValue = 0;
            clearInterval(time);
        }
        imgArr[preIndex].style.opacity = preOpacityValue;
    }, 40);
}
// 小圆点按钮
let circles = document.querySelectorAll(".circle");
for (let i = 0; i < circles.length; i++) {
    circles[i].onmousedown = function () {
        clearInterval(timer)
        preIndex = index
        index = i;
        changColor();
        // 上一张图片淡出
        showImg();
        // // 下一站图片淡入
        hideImg();
    };
    circles[i].onmouseup = function () {
        timer = setInterval(rightClick, 3000)
    };
}
// 小圆点变色
function changColor() {
    for (let i = 0; i < circles.length; i++) {
        circles[i].classList.remove("active");
    }
    // 自己变色
    circles[index].classList.add("active");
}

// top3
let rgt = document.querySelector(".top3-nav .rgt");
let sp = rgt.children[1];
rgt.onmouseover = () => {
    rgt.style.color = "rgb(255,103,0)";
    sp.style.color = "rgb(255,103,0)";
};
rgt.onmouseout = () => {
    rgt.style.color = "black";
    sp.style.color = "rgb(176, 173, 173)";
};

let img = document.querySelector(".top3-cont .img");
img.onmouseover = () => {
    img.style.marginTop = "-5px";
    img.style.boxShadow = "2px 5px 10px rgba(0, 0, 0, 0.4)";
};
img.onmouseout = () => {
    img.style.marginTop = "0px";
    img.style.boxShadow = "none";
};

let top3Li = document.querySelectorAll(".top3-ul li");
for (let i = 0; i < top3Li.length; i++) {
    top3Li[i].onmouseover = () => {
        top3Li[i].style.marginTop = "-5px";
        top3Li[i].style.boxShadow = "2px 5px 20px rgba(0, 0, 0, 0.2)";
    };
    top3Li[i].onmouseout = () => {
        top3Li[i].style.marginTop = "0px";
        top3Li[i].style.boxShadow = "none";
    };
}

// top4
let rgt4 = document.querySelector(".top4-nav .rgt");
let sp4 = rgt4.children;
let top4Rigth = document.querySelector(".top4-rigt")
let top4Rigth2 = document.querySelector(".top4-rigt2")
sp4[0].style.color = "#ff6700"
sp4[0].style.borderBottom = "2px solid #ff6700"

sp4[0].onmouseover = () => {
    sp4[0].style.color = "#ff6700";
    sp4[0].style.borderBottom = "2px solid #ff6700"
    sp4[1].style.color = "black";
    sp4[1].style.borderBottom = "none"
    top4Rigth.style.display = "block"
    top4Rigth2.style.display = 'none'
};
sp4[1].onmouseover = () => {
    sp4[0].style.color = "black";
    sp4[0].style.borderBottom = "none"
    sp4[1].style.color = "#ff6700";
    sp4[1].style.borderBottom = "2px solid #ff6700"
    top4Rigth.style.display = "none"
    top4Rigth2.style.display = 'block'
};
sp4[1].onmouseout = () => {
};

let img4 = document.querySelector(".top4-cont .img");
img4.onmouseover = () => {
    img4.style.marginTop = "-5px";
    img4.style.boxShadow = "0px 5px 20px 0px rgba(0,0,0,0.2)";
};
img4.onmouseout = () => {
    img4.style.marginTop = "0px";
    img4.style.boxShadow = "none";
};

let top4Li = document.querySelectorAll(".top4-ul li");
for (let i = 0; i < top4Li.length; i++) {
    top4Li[i].onmouseover = () => {
        top4Li[i].style.marginTop = "-5px";
        top4Li[i].style.boxShadow = "0px 5px 20px 0px rgba(0,0,0,0.2)";
    };
    top4Li[i].onmouseout = () => {
        top4Li[i].style.marginTop = "0px";
        top4Li[i].style.boxShadow = "none";
    };
}
let top4Li2 = document.querySelectorAll(".top4-ul1 li");
for (let i = 0; i < top4Li2.length; i++) {
    top4Li2[i].onmouseover = () => {
        top4Li2[i].style.marginTop = "-5px";
        top4Li2[i].style.boxShadow = "0px 5px 20px 0px rgba(0,0,0,0.2)";
    };
    top4Li2[i].onmouseout = () => {
        top4Li2[i].style.marginTop = "0px";
        top4Li2[i].style.boxShadow = "none";
    };
}

// top5
let rgt5 = document.querySelector(".top5-nav .rgt");
let sp5 = rgt5.children;
let top5Rigth = document.querySelector(".top5-rigt")
let top5Rigth2 = document.querySelector(".top5-rigt2")
sp5[0].style.color = "#ff6700"
sp5[0].style.borderBottom = "2px solid #ff6700"

let img5 = document.querySelector(".top5-cont .img");
img5.onmouseover = () => {
    img5.style.marginTop = "-5px";
    img5.style.boxShadow = "0px 5px 20px 0px rgba(0,0,0,0.2)";
};
img5.onmouseout = () => {
    img5.style.marginTop = "0px";
    img5.style.boxShadow = "none";
};

let top5Li = document.querySelectorAll(".top5-ul li");
for (let i = 0; i < top5Li.length; i++) {
    top5Li[i].onmouseover = () => {
        top5Li[i].style.marginTop = "-5px";
        top5Li[i].style.boxShadow = "0px 5px 20px 0px rgba(0,0,0,0.2)";
    };
    top5Li[i].onmouseout = () => {
        top5Li[i].style.marginTop = "0px";
        top5Li[i].style.boxShadow = "none";
    };
}

// top6
let rgt6 = document.querySelector(".top6-nav .rgt");
let sp6 = rgt6.children;
let top6Rigth = document.querySelector(".top6-rigt")
let top6Rigth2 = document.querySelector(".top6-rigt2")

sp6[0].style.color = "#ff6700"
sp6[0].style.borderBottom = "2px solid #ff6700"

sp6[0].onmouseover = () => {
    sp6[0].style.color = "#ff6700";
    sp6[0].style.borderBottom = "2px solid #ff6700"
    sp6[1].style.color = "black";
    sp6[1].style.borderBottom = "none"
    top6Rigth.style.display = "block"
    top6Rigth2.style.display = 'none'
};
sp6[1].onmouseover = () => {
    sp6[0].style.color = "black";
    sp6[0].style.borderBottom = "none"
    sp6[1].style.color = "#ff6700";
    sp6[1].style.borderBottom = "2px solid #ff6700"
    top6Rigth.style.display = "none"
    top6Rigth2.style.display = 'block'
};

let top6Li = document.querySelectorAll(".top6-ul li");
for (let i = 0; i < top6Li.length - 1; i++) {
    top6Li[i].onmouseover = () => {
        top6Li[i].style.marginTop = "-5px";
        top6Li[i].style.boxShadow = "0px 5px 20px 0px rgba(0,0,0,0.2)";
    };
    top6Li[i].onmouseout = () => {
        top6Li[i].style.marginTop = "0px";
        top6Li[i].style.boxShadow = "none";
    };
}
let top6LiLast = top6Li[top6Li.length - 1];
top6LiLast.children[0].onmouseover = function () {
    top6LiLast.children[0].style.transform = 'translate(0px, -5px)';
    top6LiLast.children[0].style.boxShadow = "0px 5px 20px 0px rgba(0,0,0,0.2)";
}
top6LiLast.children[0].onmouseout = function () {
    top6LiLast.children[0].style.transform = "translate(0, 0)";
    top6LiLast.children[0].style.boxShadow = "none";
}
top6LiLast.children[1].onmouseover = function () {
    this.style.marginTop = "-5px";
    this.style.boxShadow = "0px 5px 20px 0px rgba(0,0,0,0.2)";
}
top6LiLast.children[1].onmouseout = function () {
    this.style.marginTop = "0";
    this.style.boxShadow = "none";
}

let top6Li2 = document.querySelectorAll(".top6-ul1 li");
for (let i = 0; i < top6Li2.length; i++) {
    top6Li2[i].onmouseover = () => {
        top6Li2[i].style.marginTop = '-5px'
        top6Li2[i].style.boxShadow = "0px 5px 20px 0px rgba(0,0,0,0.2)";
    };
    top6Li2[i].onmouseout = () => {
        top6Li2[i].style.marginTop = "0px";
        top6Li2[i].style.boxShadow = "none";
    };
}


// 视频
let topVideorgt = document.querySelector(".topVideo-nav .rgt");
let topVideosp = topVideorgt.children[1];
topVideorgt.onmouseover = () => {
    topVideorgt.style.color = "rgb(255,103,0)";
    topVideosp.style.color = "rgb(255,103,0)";
};
topVideorgt.onmouseout = () => {
    topVideorgt.style.color = "black";
    topVideosp.style.color = "rgb(176, 173, 173)";
};

let videoUlli = document.querySelectorAll('.videoUl li')
let icon = document.querySelectorAll('.icon-play')

for(let i = 0; i < videoUlli.length; i++) {
    videoUlli[i].onmouseover = function () {
        this.style.marginTop = '-5px'
        this.style.boxShadow = "0px 5px 20px 0px rgba(0,0,0,0.2)"
        icon[i].style.color =  '#ff6700'
    }
    videoUlli[i].onmouseout = function () {
        this.style.marginTop = '0px'
        this.style.boxShadow = "none"
        icon[i].style.color =  '#ccc'
    }
}

let showVideos = document.querySelectorAll('.showVideo')
let spanCuos = document.querySelectorAll('.icon-cuo')
let videos = document.querySelectorAll('video')
for(let i = 0; i < videoUlli.length; i++) {
    videoUlli[i].onclick = () => {
        showVideos[i].style.display = 'block';
    }
}

for (let i = 0; i < spanCuos.length; i++) {
    spanCuos[i].onclick = () => {
        showVideos[i].style.display = 'none'
        videos[i].pause()
    }
}





// 侧边固定栏
let asideLi = document.querySelectorAll('.asideUl li')
let asideLi1 = asideLi[0]
let asideShow = document.querySelector(".aside-show")

for(let i = 0; i < asideLi.length; i++) {
    asideLi[i].onmouseover = () => {
        asideLi[i].children[0].style.color = "#ff6700"
        asideLi[i].children[1].style.color = "#ff6700"
    }
    asideLi[i].onmouseout = () => {
        asideLi[i].children[0].style.color = "rgb(172, 171, 171)"
        asideLi[i].children[1].style.color = "#ccc"
    }
}

let asideBtn = document.querySelector('.aside-btn')
asideBtn.onmouseover = () => {
    asideBtn.children[0].style.color = "#ff6700"
    asideBtn.children[1].style.color = "#ff6700"
}
asideBtn.onmouseout = () => {
    asideBtn.children[0].style.color = "#ccc"
    asideBtn.children[1].style.color = "#ccc"
}
asideLi1.onmouseover =  () =>{
    asideShow.style.display = "block"
}
asideLi1.onmouseout = () =>{
    asideShow.style.display = "none"
}
asideShow.onmouseover = () => {
    asideShow.style.display = "block"
}
asideShow.onmouseout = () => {
    asideShow.style.display = "none"
}


// scroll按钮
window.onscroll = function() {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollTop >= 20) { //当大于20px，按钮出现
        asideBtn.style.display = 'block';
    } else {
        asideBtn.style.display = 'none';
    }

}
//第二个功能，点击返回功能
asideBtn.onclick = function() {

    // 第一种方法
    // var s = document.documentElement.scrollTop;
    // // 定时器
    // timer = window.setInterval(function() {
    //     s -= 50;
    //     if (s < 0) {
    //         window.clearInterval(timer);
    //         timer = null
    //     }
    //     window.scroll(0, s)
    // }, 10)

    // 第二种方法
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
