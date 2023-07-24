const input = document.getElementById("input");
const button = document.getElementById("search");
const city = document.getElementById("city");
const lct = document.getElementById("location");
const temp = document.getElementById("temp");

async function getData(cityName) {
    let promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=81af0a8a76f744e88cf171423232407&q=${cityName}&aqi=yes`);
    return await promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    city.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    lct.innerText = `${result.location.localtime}`;
    temp.innerText = `${result.current.temp_c} Degree Temperature`;
});

