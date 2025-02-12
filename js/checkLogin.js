

async function chechLogin() {
    try {
        let username = localStorage.getItem('username');
        let password = localStorage.getItem('password');
        let uncheck = localStorage.getItem('uncheck');
        let submitT = localStorage.getItem("submitTime");
        let cridID = localStorage.getItem("cridID");
        let passID = localStorage.getItem("passID");
        if (submitT - Date.now() <= 0) {
            localStorage.clear()
            window.location.assign('./login.html')
        }
        console.log("uncheck:", uncheck)
        if (uncheck !== "YES") {
            if (username === "undefined" || password === "undefined" || cridID === "undefined" || passID === "undefined")
                window.location.assign('./login.html')
            let result = Chepost(username, password);
            result.then(result => {
                console.log(
                    result
                )
                if (result != null) {
                    if (result.type !== 'info') {
                        window.location.assign('./login.html')
                    }
                } else {
                    window.location.assign('./login.html')
                }
                const cridID=localStorage.getItem("cridID"),passID = localStorage.getItem("passID");
                if (result.data.cridID!==cridID || result.data.passwordID!==passID){
                    window.location.assign('./login.html')
                }
            })

        }
    } catch (error) {
        window.location.assign('./login.html')
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
    const elem2 = document.getElementById("status-bar");
    elem2.innerHTML="User <u>" + username+'</u> ! Welcome to the page! \nYou can open the <b>left menu</b> or search <b>everywhere</b>.';
}
setupUser()
