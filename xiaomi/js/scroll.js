// 导航
$(function() {
    show();
    
    $(window).scroll(function() {
        show();
    })
    
    function show() {
        if($(window).scrollTop() > 0) {
            $(".nav").addClass("act");
        }else {
            $(".nav").removeClass("act");
        }
    }
})

// scroll按钮
let btn = document.getElementsByClassName('scrollBtn')[0];
window.onscroll = function() {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollTop >= 20) { //当大于20px，按钮出现
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }

}
//第二个功能，点击返回功能
btn.onclick = function() {
    var s = document.documentElement.scrollTop;
    // 定时器
    timer = window.setInterval(function() {
        s -= 50;
        if (s < 0) {
            window.clearInterval(timer);
        }
        window.scroll(0, s)
    }, 10)
}






