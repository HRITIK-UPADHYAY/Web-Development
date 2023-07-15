const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyBOX7nkzx-x5PXlWyZnsND1Fw4O3vSTZlU";

const container = document.getElementById("videos-container");

//first we construct the url
//then we send the request.
//then we convert it into json format.
//get the data and modify it accordingly to our needs.
async function getVideos(q) {
  const url = `${BASE_URL}/search?key=${API_KEY}&q=${q}&type=videos&maxResults=20`;

  const response = await fetch(url, { method: "GET" });
  const data = await response.json();

  const videos = data.items;
  getVideoData(videos);
}

async function getVideoData(videos) {
  let videoData = [];

  for (let i = 0; i<videos.length; i++) {
    const video = videos[i];
    const videoId = video.id.videoId;
    videoData.push(await getVideoDetails(videoId));
  }

  console.log(videoData);
  renderVideos(videoData);
}

async function getVideoDetails(videoId) {
  const url = `${BASE_URL}/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoId}`;

  const response = await fetch(url, { method: "GET" });
  const data = await response.json();

  return data.items[0];
}

function renderData(videos) {
    container.innerHTML = ``;

  for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        const thumbnailUrl = video.snippet.thumbnails.high.url;
        container.innerHTML += `
        <a href="videoDetails.html">
            <div class="video-info" onclick="openvideoDetails("${video.id}")">
                <div class="video-image"> <img src="${thumbnailUrl}" alt="Video Image" srcset=""> </div>
                <div class="description">
                    <div class="channel-avatar">
                        <img src="" alt="channel Avatar" srcset="">
                    </div>
                        <div class="video-title"> ${video.snippet.localized.title} </div>
                    <div class="channel-description">
                        <p class="channel-name"> Channel </p>
                        <p class="video-views"> 15k Views </p>
                        <p class="video-time"> 1 Week Ago </p>
                    </div>
                </div>
            </div>
        </a`;
    }
  
}

function openVideoDetails(videoId) {
  localStorage.setItem("videoId", videoId);
  window.open("/videoDetails.html")
}


getVideos("");

