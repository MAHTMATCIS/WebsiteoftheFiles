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
        for (const i of items1){
            i.style.opacity=1;
        }
        for (const i of items2){
            i.style.opacity=1;
        }
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