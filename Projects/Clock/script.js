function showTime() {
    const currentTIme = new Date();
    const time = `${currentTIme.getHours()}:${currentTIme.getMinutes()}:${currentTIme.getSeconds()}`
    document.getElementById("time").innerText = time;
}

const interval = setInterval(showTime, 1000);

const button = document.getElementById("stop");
button.addEventListener('click', () => {
    clearInterval(interval);
})