const API_KEY = "46029c61";
const searchByAPIKey = document.getElementById("API_KEY");
const searchByName = document.getElementById("Search");
const searchBtn = document.getElementById("search-btn");
const errorMesg = document.getElementById("error");
const movieCard = document.getElementById("movie-card");
const loader = document.getElementById("loader-cont");

searchBtn.addEventListener('click', () => {
    check();
})


function check() {
    if(searchByAPIKey.value === "" && searchByName.value === "") {
        errorMesg.style.display = 'block';
    }
    else {
        errorMesg.style.display = 'none';
        fetchDeatils(searchByAPIKey.value, searchByName.value);
    }
}

function fetchDeatils(byAPI, byName) {
    if(byAPI !== "")  fetchData(`http://www.omdbapi.com/?i=${byAPI}&apikey=${API_KEY}`);
    if(byName !== "") fetchData(`http://www.omdbapi.com/?i=${byName}&apikey=${API_KEY}`);
}

async function fetchData(url) {
    loader.style.display = 'flex';

    let response = await fetch(url, {method: "GET"});
    const result = await response.json();

    loader.style.display = 'none';

    renderIntoUi(result);
}

function renderIntoUi(result) {
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
        <img src="${result.Poster}" alt="">
        <p> ${result.Title} </p>
        <a href="https://www.imdb.com/title/${result.imdbID}/"> More Details </a>
    `

    movieCard.appendChild(container);
}

