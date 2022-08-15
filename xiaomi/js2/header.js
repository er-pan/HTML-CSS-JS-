// 顶部导航
let li = document.querySelector('.li');
let content = document.querySelector('.li .content')
li.onmouseover = () => {
    content.style.display = 'block'
}
li.onmouseout = () => {
    content.style.display = 'none'
}

let right2 = document.querySelector('.right2')
let show = document.querySelector('.right2 .show')
right2.onmouseover = () => {
    show.style.height = '120px'
}
right2.onmouseout = () => {
    show.style.height = '0px'
}

// 搜索框
let input = document.getElementsByTagName('input')[0]
let serach = document.querySelector('.search')
// 下拉搜索列表
let inUl = document.querySelector('.in-ul')
input.onmousedown = function() {
    serach.style.border = '1px solid #ff6700'
    input.style.borderRight = '1px solid #ff6700'
    inUl.style.display = 'block'
}
input.onblur = function() {
    serach.style.border = '1px solid #ccc'
    input.style.borderRight = '1px solid #ccc'
    inUl.style.display = 'none'
}





// 下拉菜单
let cont = document.querySelector('.cont')
let ul = cont.children[0]
let lis = ul.children

let dv = document.querySelector('.dv')
let dvChild = dv.children

for(let i = 0; i < 7; i++) {
        lis[i].onmouseover = function() {
            dvChild[i].style.height = 201 + 'px'
            dvChild[i].style.borderTop = '1px solid #ccc'
            dvChild[i].onmouseover = function() {
                dvChild[i].style.borderTop = '1px solid #ccc'
                dvChild[i].style.height = 201 + 'px'
            }
        }
        lis[i].onmouseout = function() {
            dvChild[i].style.height = '0'
            dvChild[i].style.borderTop = 'none'
            dvChild[i].onmouseout = function() {
                dvChild[i].style.borderTop = 'none'
                dvChild[i].style.height = '0'
            }
        }
}
