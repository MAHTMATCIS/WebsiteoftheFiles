function leftMenu(){
    let leftMenu = document.getElementById("left-img");
    let leftMenu2 = document.getElementById("left-menu");
    let items1= document.getElementsByClassName("menu-btn");
    let items2= document.getElementsByClassName("menu-div");
    console.debug(leftMenu.style.left)
    if (leftMenu.style.left==="0px"){
        leftMenu.style.left="300px";
        leftMenu.src="img/left_arrow.png"
        leftMenu2.style.width="300px"
        setTimeout(function(){
            for (const i of items1){
                i.style.opacity=1;
            }
            for (const i of items2){
                i.style.opacity=1;
            }
            },200);
    }else{
        leftMenu.style.left="0";
        leftMenu.src="img/right_arrow.png"
        leftMenu2.style.width="0"
        for (const i of items1){
            i.style.opacity=0;
        }for (const i of items2){
            i.style.opacity=0;
        }
    }
}

let i = 0;

function liv(elem){
    elem.style.backgroundColor=`hsl(${(i%360+Math.random()*360)%360},${100-Math.random()*20}%,50%)`
    i+=60;
}

function dontTouch(){
    const elem2=document.getElementById("dontTouch");
    const elem=document.getElementById("first-div");
    elem2.style.opacity=0;
    elem2.style.cursor="default";
    elem.style.color="white"
    elem.style.opacity=1;
    setTimeout(function(){
        elem.style.backgroundColor="red";
        setInterval(function (){liv(elem)},100);
    },5000);
}