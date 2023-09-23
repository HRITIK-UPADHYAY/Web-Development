const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPwd = document.getElementById("userPwd");
const userCmPwd = document.getElementById("userCmPwd");
const signupBtn = document.getElementById("signup");
const errorMsg = document.getElementById("error");

(function checkLocalStorage() {
    if(localStorage.getItem('user') !== null) window.location.href = "http://127.0.0.1:5501/Contests/F3-contest-2/profile.html";
})()

signupBtn.addEventListener('click', () => {
    if(checkAllFieldsAreFilled()) {
        const userToken = createToken("");
        const arr = [userName.value, userEmail.value, userToken, userPwd.value];
        localStorage.setItem('user', JSON.stringify(arr));
        window.location.href = "http://127.0.0.1:5501/Contests/F3-contest-2/profile.html";
    }
    else errorMsg.style.display = 'block';
})

function checkAllFieldsAreFilled() {
    if(userName.value === "" || userEmail.value === "" || userPwd.value === "" || userCmPwd.value === "") return false;
    else if(userPwd.value !== userCmPwd.value) return false;
    return true;
}


let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefghijklmnopqrstuvwxyz";
let numberSet = "0123456789";
let specialSet = "!~#$%&*()[]{}<>/?|";
function createToken(token) {
    token += upperSet.charAt(Math.random() * upperSet.length);
    token += lowerSet.charAt(Math.random() * lowerSet.length);
    token += numberSet.charAt(Math.random() * numberSet.length);
    token += specialSet.charAt(Math.random() * specialSet.length);

    if(token.length < 16) return createToken(token);

    return token;
}