const logOut = document.getElementById("logOut");
const nam = document.getElementById("name");
const email = document.getElementById("email");
const token = document.getElementById("token");
const password = document.getElementById("pwd");


(function renderTheDetailsIntoProfilePage() {
    const arr = JSON.parse(localStorage.getItem('user'));
    nam.innerText = `${ arr[0]}`;
    email.innerText = `${ arr[1]}`;
    token.innerText = `${ arr[2]}`;
    password.innerText = `${ arr[3]}`;
})();

logOut.addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href= "http://127.0.0.1:5501/Contests/F3-contest-2/index.html";
})
