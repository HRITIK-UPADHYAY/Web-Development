const apiKey = "AIzaSyChz_rpBbKrtUVs4YvyklSd9gn1AfaKfbI";
const baseURL = `https://www.googleapis.com/youtube/v3`;

async function fetchChannelDetails(channelId) {
    let url =  `${baseURL}/channels?key=${apiKey}&part=snippet,statistics&id=${channelId}`;

    const response = await fetch(url, {method: "GET"});
    const result = await response.json();

    return result;
}

async function fetchVideoDetails(videoId = "28ewOqp-5ds") {
    let url = `${baseURL}/videos?key=${apiKey}&part=snippet,statistics,contentDetails&id=${videoId}`;
    
    const response = await fetch(url, {method: "GET"});
    const videoInfo = await response.json();

    const channelDetails = await fetchChannelDetails(videoInfo.items[0].snippet.channelId);

    addDetailsOntoDOM(videoInfo, channelDetails);
}

function addDetailsOntoDOM(videoInfo, channelDetails) {
    /*
    <div id="video"></div>
        <p></p>
        <div class="statistics">
            <div class="left">
                views and date
            </div>
            <div class="right">
                <div> 
                    <span class="material-icons"> thumb_up </span>
                    <span> 1.7k </span>
                </div>
                <div> 
                    <span class="material-icons"> thumb_down </span>
                    <span> 1.8k </span>
                </div>
            </div>
        </div>
        <div class="channel-container">
            <div class="left">
                <img src="" alt="">
                <div>
                    <span> Channel Title </span>
                    <span style="color: #AAA;"> subscriber </span>
                </div>
            </div>
            <button class="right"> Subscribe </button>
        </div>
    */

    const container = document.createElement("div");
    container.id = "container";

    container.innerHTML = `
        <div id="video">
            
        </div>
        <p> ${videoInfo.items[0].snippet.title} </p>
        <div class="statistics">
            <div class="left"> ${videoInfo.items[0].statistics.viewCount} </div>
            <div class="right">
                <div> 
                    <span class="material-icons"> thumb_up </span>
                    <span> ${videoInfo.items[0].statistics.likeCount} </span>
                </div>
                <div> 
                    <span class="material-icons"> thumb_down </span>
                    <span> ${"NA"} </span>
                </div>
            </div>
        </div>
        <div class="channel-container">
            <div class="left">
                <img src="${channelDetails.items[0].snippet.thumbnails.high.url}" alt="">
                <div>
                    <span> ${channelDetails.items[0].snippet.title} </span>
                    <span style="color: #AAA;"> ${channelDetails.items[0].statistics.subscriberCount} </span>
                </div>
            </div>
            <button class="right"> Subscribe </button>
        </div>   
    `

    document.body.appendChild(container);
}

fetchVideoDetails();