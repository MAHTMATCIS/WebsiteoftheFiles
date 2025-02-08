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

    const data = getCookie();
    for (let i = 0;i<data.length;i++){
        data[i]=data[i].split('=');
    }
    let username=-1;
    let password=-1;
    try{
        for(let i = 0;i<data.length;i++){
            if (data[i][0] === 'username') {username = data[i][1];}
            if (data[i][0] === 'password') {password = data[i][1];}
        }
        if (username===-1 || password===-1)
            window.location.assign( "./login.html");
        let result=Chepost(username,password);
        if (result!=null){
            if (result.type==='info'){}
        }
    }catch (error){
        window.location.assign( "./login.html");
    }
    console.log(username);
    window.location.assign( "./login.html");

}
chechLogin()
