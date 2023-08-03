let endDate;

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();

    const diff = (end - now) / 1000; //now diff is in seconds.

    if(diff < 0) return;

    const inputs = document.getElementsByClassName("output");

    // convert into days.
    const days = Math.floor(diff / 3600 / 24);
    inputs[0].value = days;

    // convert into hours
    const hours = Math.floor((diff / 3600) % 24);
    inputs[1].value = hours;
    
    // convert into minutes 
    const minutes = Math.floor((diff / 60) % 60);
    inputs[2].value = minutes;

    // convert into seconds
    const seconds = Math.floor(diff % 60);
    inputs[3].value = seconds;
}

const start = document.getElementsByClassName("start")[0];
const startButton = document.getElementById("start");
startButton.addEventListener('click', () => {
    const select = document.getElementsByTagName("select");
    const inputs = document.getElementsByClassName("input");

    endDate = `${inputs[0].value} ${inputs[1].value} ${inputs[2].value} ${inputs[3].value}:${inputs[4].value} ${select[0].value}`;

    start.style.display = "none";
    const overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.visibility = "visible";

    document.getElementById("endDate").innerText = endDate;
    setInterval(clock, 1000);
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', () => {
    const overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.visibility = "hidden";
    start.style.display = "block";
})
