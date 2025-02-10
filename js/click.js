
function setCookie(c, v, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${c}=${v};  ${expires}; path=/`;
}

// 示例：设置一个名为 "username" 的Cookie，值为 "JohnDoe"，有效期为7天

function getCookie() {
    const decodedCookie = decodeURIComponent(document.cookie);
    return decodedCookie.split(';');
}


async function Chepost(username,password,type='login') {
    // 发送 POST 请求到服务器
    const f=fetch('https://mahtapi.netlify.app/.netlify/functions/post-handler', {
        method: 'POST',
        body: JSON.stringify({
            type: type,
            username: username,
            password: password
        },),
        headers:{
        }
    })
    return (await f).   json()
}

function resetProp(){
    const usernameEle=document.getElementById("username-message");
    const usernameInp=document.getElementById("username");
    const passwordEle=document.getElementById("password-message");
    const passwordInp=document.getElementById("password");
    try{
        passwordEle.innerHTML="";
        passwordEle.style.removeProperty('color');
        passwordInp.style.backgroundColor="rgb(255,255,255,255)";
        usernameEle.innerHTML="";
        usernameEle.style.removeProperty('color');
        usernameInp.style.backgroundColor="rgb(255,255,255,255)";
    }catch (error){
        if( usernameEle!==null)
            console.log(error);
    }
}

function testForUP(password,username)
    {
        const usernameEle=document.getElementById("username-message");
        const usernameInp=document.getElementById("username");
        const passwordEle=document.getElementById("password-message");
        const passwordInp=document.getElementById("password");
        resetProp()
        if (!password){
            passwordEle.innerHTML="Empty!";
            passwordEle.style.color='red';
            passwordInp.style.backgroundColor="rgb(255,177,177,255)";
        }
        if (!username){
            usernameEle.innerHTML="Empty!";
            usernameEle.style.color='red';
            usernameInp.style.backgroundColor="rgb(255,177,177,255)";
        }



}

resetProp();



function login(){
    let username = document.getElementById("username").value;
    let btn = document.getElementById("login-btn");
    let password = document.getElementById("password").value;
    let che = document.getElementById("checkBtn");
    console.log(username,password)


    if (username && password) {
        btn.disabled=true;
        let response=(Chepost(username,password))
        response.then(res=>{
            alert(res.message+'\n'+((res.data!==undefined)?res.data:''))
            btn.disabled=false;
            if (res.type==='info') {
                localStorage.setItem('username',username);
                localStorage.setItem('password',password);
                localStorage.setItem('uncheck',"YES")
                console.log(che.value)
                localStorage.setItem('submitTime',Date.now()+(che.checked? 7*604800000:10000))
                window.location.assign( "./index.html");
            }
        })
    }
    testForUP(password,username);
}

function ChangeF(to){
    let div = document.getElementsByClassName('login')[0];
    div.style.transition='opacity 0.3s'
    div.style.opacity=0;
    function timeout(){window.location.assign(to);}
    setTimeout(timeout,300);
}

function register_(){
    let username = document.getElementById("username").value;
    let btn = document.getElementById("login-btn");
    btn.disabled=true;
    let password = document.getElementById("password").value;

    if (username && password) {
        let response=(Chepost(username,password,'register'))
        response.then(res=>{
            alert(res.message+'\n'+((res.data!==undefined)?res.data:''))
            if (res.type==='info') {            window.location.assign( "./login.html");
            }
        })
    }
    testForUP(password,username);
    btn.disabled=false;
}