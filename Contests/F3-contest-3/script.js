const picDate = document.getElementById("date");
const imageSrc = document.getElementById("image");
const picName = document.getElementById("name");
const picDescription = document.getElementById("description");
const dateField = document.getElementById("search-input");
const searchBtn = document.getElementById("search");

const baseURL = "https://api.nasa.gov/planetary/apod?";
const apiKey = "NtZ3jZBA52Aka3fsnTgHfEzA2vmzRSkTHTIhYtaM";

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const result = getImageOfTheDay(dateField.value, true);
});

(async function getCurrentImageOfTheDay() {
    const date = new Date().toISOString().split("T")[0];
    const url = `${baseURL}date=${date}&api_key=${apiKey}`;

    const response = await fetch(url, {method: "GET"});
    const result = await response.json();

    //render Details into UI
    renderDataIntoUI(result);

    const arr = JSON.parse(localStorage.getItem('searches'));

    if(arr != null) {
        for(let i=0; i<arr.length; i++) {
            addSearchToHistory(arr[i]);
        }
    }

} )();


async function getImageOfTheDay(date, check) {
    const url = `${baseURL}date=${date}&api_key=${apiKey}`;

    const response = await fetch(url, {method: "GET"});
    const result = await response.json();

    //render Details into UI
    renderDataIntoUI(result);

    //save the date into localStorage.
    saveSearch(date, check);

    //add date into searchHistory.
    if(check) addSearchToHistory(date);
}

function renderDataIntoUI(result) {
    picDate.innerText = `Picture On ${result.date}`
    imageSrc.src = `${result.url}`;
    picName.innerText = `${result.title}`;
    picDescription.innerText = `${result.explanation}`;
} 

function saveSearch(date, check) {
    if(check) {
        if(localStorage.getItem('searches')) {
            const arr = JSON.parse(localStorage.getItem('searches'));
            arr.push(date);
            localStorage.setItem('searches', JSON.stringify(arr));
        }
        else {
            const arr = [];
            arr.push(date);
            localStorage.setItem('searches', JSON.stringify(arr));
        }   
    }   
}

function addSearchToHistory(date) {
    const linksContainer = document.getElementById("search-history");
    const a = document.createElement("a");
    a.href = "#";
    a.innerText = `${date}`;
    a.addEventListener('click', (e) => {
        getImageOfTheDay(e.target.innerText, false);
    })

    linksContainer.appendChild(a);                                    
}