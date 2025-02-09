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


function Chepost(username,password) {
    // 发送 POST 请求到服务器
    fetch('https://mahtapi.netlify.app/.netlify/functions/post-handler', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            type:'login',
            username: username,
            password: password
        }),
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(error => {
            console.log('Error:', error);
        });
    return null
}

function chechLogin() {

    let username=-1;
    let password=-1;
    let uncheck=-1;
    let submitT=-1;
    try{
        username=localStorage.getItem('username');
        password=localStorage.getItem('password');
        uncheck=localStorage.getItem('uncheck');
        submitT=localStorage.getItem("submitTime");
        console.log(submitT,'\n');
        console.log(submitT-Date.now())
        if (submitT-Date.now()<=0){
            alert("Login status expired. Please log in again.")
            localStorage.clear()
            window.location.assign( "./login.html");
        }

        if (uncheck===null){
            if (username===null || password===null)
                window.location.assign( "./login.html");
            let result=Chepost(username,password);
            if (result!=null){
                if (result.type==='info'){}
            }
        }
    }catch (error){
        console.log(error);
        window.location.assign( "./login.html");
    }

}
console.log('Hello, world!');
chechLogin()
const username = localStorage.getItem("username");
const password = localStorage.getItem("password");

function setupUser(){
    const elem1=document.getElementById("h1-title");
    elem1.innerHTML="HI! " + username;
}
setupUser()
