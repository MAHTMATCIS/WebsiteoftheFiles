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

function AdminSetting(){
    const elem2=document.getElementById("admin-btn");
    elem2.disabled=true;
    let result = Chepost("ADMIN", password);
    result.then(result => {
        if (result != null) {
            if (result.type !== 'info') {
                alert("Error\n You are NOT ADMIN")
                return
            }
        } else {
            alert("Error\n You are NOT ADMIN")
            return
        }
        const cridID=localStorage.getItem("cridID"),passID = localStorage.getItem("passID");
        if (result.data.cridID!==cridID || result.data.passwordID!==passID){
            console.log(cridID,passID)
            alert("Error\n You are NOT ADMIN")
            return
        }
        alert("Info\n You are ADMIN!")
        location.assign('#AdminSetting')
        localStorage.setItem('acceptAdminSetting',"true")
        elem2.disabled=false;
    })
}
function allUsers(){
    const elem=document.getElementById("AdminDisplay");
    let result = Chepost(username, password,'getAllUser');
    result.then(result => {
        console.debug(
            result
        )
        elem.innerHTML=JSON.stringify(result)
    })
}

// 如果需要在哈希改变时执行某些操作，可以使用监听器
window.addEventListener('hashchange', function() {
    const newHash = window.location.hash.substring(1);

    // 在这里添加你的逻辑处理代码
    // 例如，根据不同的哈希值展示不同内容
    if (newHash === 'AdminSetting') {
        const accept=localStorage.getItem('acceptAdminSetting')
        if (accept==='true'){
            localStorage.removeItem('acceptAdminSetting');
            console.log('Setting')
            const elem=document.getElementById('admin-bar');
            elem.style.opacity=1;
            elem.hidden=false;
        }
    }
});

