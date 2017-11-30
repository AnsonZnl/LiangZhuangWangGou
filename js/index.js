/**
 * Created by lenovo on 17/11/30 030.
 */
//左侧导航
var leftHead=document.querySelectorAll(".J-left-nav");
var ssczUl=document.querySelectorAll(".sscz ul");
for(i=0;i<leftHead.length;i++){
    leftHead[i].onmouseover=function (){
        this.nextElementSibling.style.display='block';
    };
    leftHead[i].onmouseout=function(){
        this.nextElementSibling.style.display='none'
    };
    ssczUl[i].onmouseover=function (){
        var a=this.previousElementSibling.children;
        for(n=0;n<a.length;n++){
            a[n].style.color='#fff';
        }
        this.previousElementSibling.style.backgroundColor='#d81a5a';
        this.style.display='block';
    };
    ssczUl[i].onmouseout=function(){
        this.style.display='none';
        var a=this.previousElementSibling.children;
        for(n=0;n<a.length;n++){
            a[n].style.color='';
        }
        this.previousElementSibling.style.backgroundColor='';
    };
}
//banner 轮播图
function moveImg(list,index) {
    for(var i=0;i<list.length;i++){
        if(list[i].className=='opa-on'){//清除li的透明度样式
            list[i].className='';
        }
    }
    list[index].className='opa-on';
}
function moveIndex(list,num){//移动小圆圈
    for(var i=0;i<list.length;i++){
        if(list[i].className=='on'){//清除li的背景样式
            list[i].className='';
        }
    }
    list[num].className='on';
}

var imgList=document.getElementById('img').getElementsByTagName('li');
var list=document.getElementById('index').getElementsByTagName('li');
var index=0;
var timer;

for(var i=0;i<list.length;i++){//鼠标覆盖上哪个小圆圈，图片就移动到哪个小圆圈，并停止
    list[i].index=i;
    list[i].onmouseover= function () {
        var clickIndex=parseInt(this.index);
        index=clickIndex;
        moveImg(imgList,index);
        moveIndex(list,index);
        clearInterval(timer);
    };
    list[i].onmouseout= function () {//移开后继续轮播
        play();
    };

}

var nextMove=function(){
    index+=1;
    if(index>=4){
        index=0
    }
    moveImg(imgList,index);
    moveIndex(list,index);
};
var play=function(){
    timer=setInterval(function(){
        nextMove();
    },3000);
};
play();