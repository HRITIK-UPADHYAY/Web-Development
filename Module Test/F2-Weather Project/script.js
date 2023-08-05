const apiKey = '4d7583c3389d4a5cf7e34278920cb4bf';
let CITY_NAME = 'montreal';
const container = document.getElementById("cnt");

const city = [];
const set = new Set();

const input = document.getElementById("input");
const button = document.getElementById("btn");
button.addEventListener('click', () => {
    CITY_NAME = input.value;
    fetchData();
})

async function fetchData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${apiKey}&units=metric`
    const data = await fetch(url, {method: "GET"});
    const result =  await data.json();
    console.log(result);

    city.push(result);
    renderDataIntoUI();
}


function renderDataIntoUI() {
    city.sort((a,b) => a.main.temp - b.main.temp);
    container.innerHTML = '';

    for(let i=0; i<city.length; i++) {
        const iconCode = city[i].weather[0].icon;
        console.log(iconCode);
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

        const template = document.createElement("div");
        template.className = "template";
        template.id = "template";
        template.innerHTML = `
            <div class="left">
                <div class="upper"> 
                    <span id="temprature"> ${Math.floor(city[i].main.temp)}°  </span>
                </div>
                <div class="lower">
                    <span id="cordinate"> H:${Math.floor(city[i].main.temp_max)}° L:${Math.floor(city[i].main.temp_min)}° </span>
                    <span id="place"> ${city[i].name} ${city[i].sys.country} </span>
                </div>
            </div>
            <div class="right">
                <img src="${iconUrl}" alt="">
                <span id="status"> ${city[i].weather[0].main} </span>
            </div>
        `

        container.appendChild(template);;
    }
    
}

// 10n
