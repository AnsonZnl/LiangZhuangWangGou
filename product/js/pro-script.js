//商品分类显示隐藏
var JCode=document.getElementById("J-nav-left");
var JCodeImg=document.getElementById("J-left-nav");
finou(JCode,JCodeImg);
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
//info 信息栏
var infoLeftLi=document.querySelectorAll(".info-left li");
var bigImg=document.querySelectorAll(".big-img img");

for(var q=0;q<infoLeftLi.length;q++){
    infoLeftLi[q].index=q;
    infoLeftLi[q].onmouseover=function (){
        var num=parseInt(this.index);
        for(var j=0;j<infoLeftLi.length;j++){
            bigImg[j].style.display="none";
        }
        bigImg[num].style.display="block"
    }
}
//加入购物车前的商品数量
var plus1=document.getElementById("J-buy-plus");
var reduce1=document.getElementById("J-buy-reduce");
var number1=document.getElementById("J-buy-number");
reduce1.onclick=function(){
    if(number1.value==1){
        alert("购买数量不得为负！")
    }else {
        number1.value--
    }
};
plus1.onclick=function(){
    number1.value++
};
//左侧边栏 hover show
var  JhvsoLeft=document.getElementsByClassName("J-hvso-left");
var  HoverShow=document.getElementsByClassName("hovershow");
for (var s=0;s<JhvsoLeft.length;s++){
    JhvsoLeft[s].index=s;
    JhvsoLeft[s].onmouseover=function(){
        var num=parseInt(this.index);
        for(var w=0;w<JhvsoLeft.length;w++){
            HoverShow[w].style.display="none";
        }
        HoverShow[num].style.display="block";
    }
}
//买过该商品的用户还浏览了
var tags=document.getElementById("tags").children;
var tagContent=document.getElementById("tag-content").children;
for(var t=0;t<tags.length;t++){
    tags[t].index=t;
    tags[t].onmouseover=function(){
        var num=parseInt(this.index);
        for(var a=0;a<tags.length;a++){
            tags[a].classList.remove("selectTag");
            tags[a].lastElementChild.style.color="#666";
            tagContent[a].style.display="none";
        }
        tags[num].classList.add("selectTag");
        tags[num].lastElementChild.style.color="red";
        tagContent[num].style.display="block";
    }
}