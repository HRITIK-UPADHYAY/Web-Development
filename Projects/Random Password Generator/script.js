const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "~!@#$%&()<>/?{}[]-_=+*";

const pwd = document.getElementById("password");
const length = document.getElementById("psd-length");
const upper = document.getElementById("upper-case");
const lower = document.getElementById("lower-case");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatePassword = (psd = "")  => {
    //upper.checked is checking the if checkbox is ticked or not.
    if(upper.checked)  psd += getRandomData(upperSet);
    if(lower.checked) psd += getRandomData(lowerSet);
    if(number.checked) psd += getRandomData(numberSet);
    if(symbol.checked) psd += getRandomData(symbolSet);

   if(psd.length < length.value) return generatePassword(psd);

   psd = psd.substring(0, length.value);
   pwd.innerText = psd;
   navigator.clipboard.writeText(psd);
}

const generate = document.getElementById("btn");
generate.addEventListener("click", function(){generatePassword()});