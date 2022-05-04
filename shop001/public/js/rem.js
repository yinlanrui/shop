function remSize() {
    //1rem=当前页面html的font-size值的大小 30px
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'//设置html的fontsize(1rem) 750 1rem=100px
    //屏幕越宽rem值越大,屏幕越窄rem值越小
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
    // 设计稿是750px.
    // 设置1半的宽度，那么就是375px
    // 1rem == 100px的设计稿宽度
    // 表达一半的宽度就是3.75rem
}

remSize()

// 在不同屏幕宽度下，html的font-size大小也会跟着改变
window.onresize = function() {
    remSize()
}
