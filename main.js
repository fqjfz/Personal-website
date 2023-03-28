/* 鼠标样式 */
const body = document.querySelector("body");
const element = document.getElementById("g-pointer-1");
const element2 = document.getElementById("g-pointer-2");
const halfAlementWidth = element.offsetWidth / 2;
const halfAlementWidth2 = element2.offsetWidth / 2;

function setPosition(x, y) {
    element2.style.transform = `translate(${x - halfAlementWidth2+1 }px, ${y - halfAlementWidth2 +1}px)`;
}

body.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(function () {
        setPosition(e.clientX, e.clientY);
    });
});


//加载完成后执行
window.addEventListener('load', function () {

    var Loadingbox=document.querySelector('#loading-box');
    document.querySelector('#loading-box')=function(){
    attr('class', 'loaded');
    }
    
    
    //载入动画
    document.querySelector('#loading-box').attr('class', 'loaded');
    document.querySelector('#bg').css("cssText", "transform: scale(1);filter: blur(0px);transition: ease 1.5s;");
    $('.cover').css("cssText", "opacity: 1;transition: ease 1.5s;");
    $('#section').css("cssText", "transform: scale(1) !important;opacity: 1 !important;filter: blur(0px) !important");

    //用户欢迎
    setTimeout(function () {
        iziToast.show({
            timeout: 2500,
            icon: false,
            title: hello,
            message: '欢迎来到我的主页'
        });
    }, 800);

    //移动端去除鼠标样式
    if (Boolean(window.navigator.userAgent.match(/AppWebKit.*Mobile.*/))) {
        $('#g-pointer-2').css("display", "none");
    }

}, false)

setTimeout(function () {
    $('#loading-text').html("字体及文件加载可能需要一定时间")
}, 3000);





//链接提示文字
var Social=document.getElementById("social");
var LinkText=document.getElementById("link-text");


Social.onmouseover=function () {
    Social.style.background="rgb(0 0 0 / 25%)";
    Social.style.borderRadius='6px';
    Social.style.backdropFilter="blur(5px)";

    LinkText.style.display="block";
}
Social.onmouseout=function () {
    Social.style.background="none"; 
    Social.style.borderRadius='6px';
    Social.style.backdropFilter="none";

}


var Github=document.getElementById("github");
var Bilbil=document.getElementById("bilibili");
var FonkA=document.getElementById("FontAwesome");

Github.onmouseover=function () {
    LinkText.innerHTML="看看开源模板";
}
Github.onmouseout=function(){
    LinkText.innerHTML="这里都是参考资源哦"
}
    
Bilbil.onmouseover=function () {
    LinkText.innerHTML="大佬修改后的资源"
}
Bilbil.onmouseout=function(){
    LinkText.innerHTML="这里都是参考资源哦"
}


FonkA.onmouseover=function () {
    LinkText.innerHTML="图标也有资源"
}
FonkA.onmouseout=function(){
    LinkText.innerHTML="这里都是参考资源哦"
}


// window.onload = () => {
//     let music = document.querySelector('#music');
//     let music_ctrl = document.querySelector('#music_ctrl');
//     // 为音乐按钮图标加一个点击事件，用来控制播放与否。
//     music_ctrl.addEventListener('click', () => {
//         if (music.paused) {
//             music.play();
//             music_ctrl.style.animation = 'playing infinite linear 2s';
//         } else {
//             music.pause();
//             music_ctrl.style.animation = 'none';

//         }
//     });
// }


var music=document.getElementById("music")
let music_ctrl = document.querySelector('#music_ctrl');
music.onclick=function() {
    if (music_ctrl.paused) {
        music_ctrl.play();
        music.style.animation = 'playing infinite linear 2s';
    } else {
        music_ctrl.pause();
        music.style.animation = 'none';
    }
}

