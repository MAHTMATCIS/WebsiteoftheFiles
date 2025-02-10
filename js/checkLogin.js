


async function Chepost(username,password) {
    // 发送 POST 请求到服务器
    let f=fetch('https://mahtapi.netlify.app/.netlify/functions/post-handler', {
        method: 'POST',
        body: JSON.stringify({
            type:'login',
            username: username,
            password: password
        }),
    })

    return (await f).json()
}

function chechLogin() {

    let username=localStorage.getItem('username');
    let password=localStorage.getItem('password');
    let uncheck = localStorage.getItem('uncheck');
    let submitT = localStorage.getItem("submitTime");
    if (submitT-Date.now()<=0){
        localStorage.clear()
        window.location.assign('./login.html')
    }
    console.log("uncheck:", uncheck)
    if (uncheck!==undefined){
        if (username===null || password===null){}
        let result=Chepost(username,password);
        result.then(result=>{
            console.log(
                result
            )
            if (result!=null){
                if (result.type!=='info'){
                    window.location.assign('./login.html')
                }
            }else{
                window.location.assign('./login.html')
            }
        })
    }


}

/*
##########################################################################
#  /¯¯¯¯\¯\  /¯¯¯¯\¯\       /¯¯¯¯\¯\     |¯¯|¯|  |¯¯|¯| ⌈¯¯¯¯¯¯¯¯¯¯¯¯⌉`⌉ #
# /  /\  \ \/  /\  \ \     /  /\  \ \    |  | |  |  | | `¯¯¯¯⌉  ⌈¯⌈¯¯`¯` #
# |  | |  \/  / |  | |    /  /__\  \ \   |   ¯¯¯¯`  | |      |  | |      #
# |  | |\    / /|  | |   /  /____\  \ \  |  ⌈¯⌈¯¯|  | |      |  | |      #
# |__|_| \__/_/ |__|_|  /__/_/    \__\_\ |__|_|  |__|_|      ⌊__⌋_⌋      #
##########################################################################
*/
console.log('##########################################################################\n' +
    '#  /¯¯¯¯\\¯\\  /¯¯¯¯\\¯\\       /¯¯¯¯\\¯\\     |¯¯|¯|  |¯¯|¯| ⌈¯¯¯¯¯¯¯¯¯¯¯¯⌉`⌉ #\n' +
    '# /  /\\  \\ \\/  /\\  \\ \\     /  /\\  \\ \\    |  | |  |  | | `¯¯¯¯⌉  ⌈¯⌈¯¯`¯` #\n' +
    '# |  | |  \\/  / |  | |    /  /__\\  \\ \\   |   ¯¯¯¯`  | |      |  | |      #\n' +
    '# |  | |\\    / /|  | |   /  /____\\  \\ \\  |  ⌈¯⌈¯¯|  | |      |  | |      #\n' +
    '# |__|_| \\__/_/ |__|_|  /__/_/    \\__\\_\\ |__|_|  |__|_|      ⌊__⌋_⌋      #\n' +
    '##########################################################################');
chechLogin()
let username = localStorage.getItem("username");
let password = localStorage.getItem("password");

function setupUser(){
    const elem1=document.getElementById("h1-title");
    elem1.innerHTML="HI! " + username;
    const title = document.getElementById('title');
    title.innerHTML="Hi! " + username;
}
setupUser()
