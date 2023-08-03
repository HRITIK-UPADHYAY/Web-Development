const apiKey = "AIzaSyChz_rpBbKrtUVs4YvyklSd9gn1AfaKfbI";
const baseURL = `https://www.googleapis.com/youtube/v3`;

/**
 * searchString is the value typed by the user in the input box.
 * @param{String} searchString.
 */


const searchButton = document.getElementById("search");
const searchInput = document.getElementById("search-input");
const container = document.getElementById("container");

searchButton.addEventListener('click', () => {
    let searchString = searchInput.value.trim();
    if(searchString === "") { return; }
    getSearchResults(searchString);
});


async function getSearchResults(searchString) {
    // make an call to the Search API and return the results from Here.
    // data need to be sent: apiKey, searchString. 
    let url = `${baseURL}/search?key=${apiKey}&q=${searchString}&part=snippet&maxResults=20`;
    const response = await fetch(url, {method: "GET"});
    const results = await response.json();

   addDataOntoUI(results.items);
}


function addDataOntoUI(videoList) {
    /* 
        <div class="video">
            <img src="sfhsdufihdsjf" alt="">
            <p> Title Of Video </p>
            <b> Akshya Saini </b>
        </div>
    */

    videoList.forEach(video => {
        const {snippet} = video;   // used destructuring.
        // const snippet = video.snippet;  // this is another way to write above line.

        const videoElement = document.createElement("div");
        videoElement.className = "video";

        videoElement.innerHTML = `
            <img src="${snippet.thumbnails.high.url}" alt="">
            <p> ${snippet.title} </p>
            <b> ${snippet.channelTitle} </b>
        `;

        container.appendChild(videoElement);
    })
}