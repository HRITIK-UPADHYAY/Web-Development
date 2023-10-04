const ipAdrs = document.getElementById("ipAddress");
const getStartedBtn = document.getElementById("btn");
const lat = document.getElementById("lat");
const long = document.getElementById("long");
const city = document.getElementById("city");
const region = document.getElementById("region");
const organisation = document.getElementById("organisation");
const hostName = document.getElementById("hostname");
const map = document.getElementById("map");
const timeZone = document.getElementById("timeZone");
const dateNdTime = document.getElementById("dateNdTime");
const pincode = document.getElementById("pincode");
const message = document.getElementById("message");
const postOfficeContainer = document.getElementById("postOfficeContainer");
const searchInput = document.getElementById("searchInput");

// function getClientIP(callback) {
//   fetch('https://api64.ipify.org?format=json')
//     .then(response => response.json())
//     .then(data => {
//       const ipAddress = data.ip;
//       callback(ipAddress);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       callback(null);
//     });
// }

// // Example usage:
// getClientIP(ipAddress => {
//   if (ipAddress) {
//     console.log(ipAddress);
    
//   } else {
//     console.log('Unable to retrieve IP address.');
//   }
// });

// Use a third-party API to get the user's IP address
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    ipAdrs.innerText = ipAddress;
    fetchIPInformation(ipAddress);
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
  });

async function fetchIPInformation(IP) {
    const url = ` https://ipapi.co/${IP}/json/`;
    const response = await fetch(url, {method: "GET"});
    const result = await response.json();
    console.log(result);
    renderDataIntoUI(result);
    
}

function renderDataIntoUI(result) {
  lat.innerText = `Lat: ${result.latitude}`;
  long.innerText = `Long: ${result.longitude}`;
  city.innerText = `City: ${result.city}`;
  region.innerText = `Region: ${result.region}`;
  organisation.innerText = `Organisation: ${result.org}`;
  hostName.innerText = `Hostname: ${result.country_name}`;
  map.src = `https://maps.google.com/maps?q=${result.latitude}, ${result.longitude}&output=embed`;
  timeZone.innerText = `Time Zone : ${result.timezone}`
  pincode.innerText = `Pincode : ${result.postal}`;

  const date = getDate(result.timeZone);
  dateNdTime.innerText = `Date And Time : ${date}`;

  getPostOffices(result.postal);
}

getStartedBtn.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1:5501/Contests/F3-Contest-1/ipAddress.html";
});

function getDate(tz) {
  // current datetime string in America/Chicago timezone
  let chicago_datetime_str = new Date().toLocaleString("en-US", { timeZone: tz });

  // create new Date object
  let date_chicago = new Date(chicago_datetime_str);

  // year as (YYYY) format
  let year = date_chicago.getFullYear();

  // month as (MM) format
  let month = ("0" + (date_chicago.getMonth() + 1)).slice(-2);

  // date as (DD) format
  let date = ("0" + date_chicago.getDate()).slice(-2);

  // date time in YYYY-MM-DD format
  let date_time = year + "-" + month + "-" + date;

  // "2021-03-22"
  return date_time;
}

async function getPostOffices(pincode) {
  const url = `https://api.postalpincode.in/pincode/${pincode}`;
  const response = await fetch(url, {method: "GET"});
  const result = await response.json();

  console.log(result);
  renderPostOfficeDataIntoUI(result);

  searchInput.addEventListener('keypress', (event) => {
    if(event.key === "Enter") {
      console.log("object", searchInput.value);
      searchByName(result, searchInput.value);
      searchInput.value = "";
    } 
  });

}

function renderPostOfficeDataIntoUI(result) {
  message.innerText = `Message : ${result[0].Message}`;
  const postOfficesArr = result[0].PostOffice;
  console.log(postOfficesArr);

  for(let i=0; i<postOfficesArr.length; i++) {
    const obj = postOfficesArr[i];
    displayIntoUI(obj);
  }
}

function displayIntoUI(obj) {
  const containerDiv = document.createElement("div");
  containerDiv.id = "container";
  containerDiv.innerHTML = `
            <div id="name"> Name: ${obj.Name} </div>
            <div id="branchType"> Branch Type: ${obj.BranchType} </div>
            <div id="delivery"> Delivery Status: ${obj.DeliveryStatus} </div>
            <div id="district"> District: ${obj.District} </div>
            <div id="division"> Division: ${obj.Division} </div>
  `

  postOfficeContainer.appendChild(containerDiv); 
}


function searchByName(result, postOfficeName) {
  postOfficeContainer.innerHTML = "";

  const postOfficesArr = result[0].PostOffice;

  for(let i=0; i<postOfficesArr.length; i++) {
    const obj = postOfficesArr[i];
    if(obj.Name === postOfficeName || obj.Division === postOfficeName) displayIntoUI(obj);
  }
}