// 公告轮播

// 获取ul高度
// var ulHeight = $(".g_list").height();
// console.log(ulHeight)   // console.log() 在浏览器的控制台输出打印

// 公告轮播函数
// 函数声明方法 function 函数名(){函数体} ， 函数一定要调用了才会执行
function moveList(){

    // animate(css, time, callback)  : 样式改变有过度效果
    // css: 要改变的css样式
    // time： 样式改变的过渡时间
    // callback: 样式改变完成后立刻执行的函数
    $(".g_list li:first").animate({
        "margin-top": -40
    }, 1000, function(){

        // $(this): 指的是该方法的调用者，在此处也就是指向$(".g_list li:first")
        // 元素.appendTo("被选元素") : 将元素插入到被选元素的结尾处
        $(this).css("margin-top",0).appendTo(".g_list")
    })
}

// 计时器, 每隔某段时间重复执行指定的函数
setInterval(moveList, 2000)