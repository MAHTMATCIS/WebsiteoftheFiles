
function updateAspectRatioStyles() {
    const loginElement = document.querySelector('.login')
    const loginButton= document.querySelector('.login-button');
    const loginlab= document.querySelectorAll('.login-label');
    const logininp= document.querySelectorAll('.login-input');
    const width = loginElement.offsetWidth;

    if (width<478) {
        for (const loginlabKey of loginlab) {
            if (!loginlabKey.classList.contains('smaller'))
                loginlabKey.classList.add('smaller');
        }
        for (const loginlabKey of logininp) {
            if (!loginlabKey.classList.contains('smaller'))
                loginlabKey.classList.add('smaller');
        }
    }else if (width < 561) {
        // 如果长宽比小于1.5，则添加特定的样式类
        if (!loginElement.classList.contains('aspect-ratio-less-1-5')) {
            loginElement.classList.add('aspect-ratio-less-1-5');
        }
        if (!loginButton.classList.contains('login-button2')) {
            loginButton.classList.add('login-button2');
        }

        for (const loginlabKey of loginlab) {
                loginlabKey.classList.remove('smaller');
        }
        for (const loginlabKey of logininp) {
                loginlabKey.classList.remove('smaller');
        }

    }
    else{
        loginElement.classList.remove('aspect-ratio-less-1-5');
        loginButton.classList.remove('login-button2');
        for (const loginlabKey of loginlab) {
            loginlabKey.classList.remove('smaller');
        }
        for (const loginlabKey of logininp) {
            loginlabKey.classList.remove('smaller');
        }
    }
}
function resetProp(){
    const usernameEle=document.getElementById("username-message");
    const usernameInp=document.getElementById("username");
    const passwordEle=document.getElementById("password-message");
    const passwordInp=document.getElementById("password");
    passwordEle.innerHTML="";
    passwordEle.style.removeProperty('color');
    passwordInp.style.backgroundColor="rgb(255,255,255,255)";
    usernameEle.innerHTML="";
    usernameEle.style.removeProperty('color');
    usernameInp.style.backgroundColor="rgb(255,255,255,255)";
}

resetProp()

// 初始化样式
updateAspectRatioStyles();

// 添加窗口大小变化监听器以动态更新样式
window.addEventListener('resize', updateAspectRatioStyles);

function setVisiable() {
    let div = document.getElementsByClassName('login')[0];
    div.style.opacity=1
}
setTimeout(setVisiable, 0);
