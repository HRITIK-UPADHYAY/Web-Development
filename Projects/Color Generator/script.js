const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = randomCode;
    document.getElementsByTagName("h2")[0].innerText = randomCode;

    //for click in button to copy a code in the system.
    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener('click', getColor);

//this is our intial call.
getColor();