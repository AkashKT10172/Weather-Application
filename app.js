const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=82d832c1b54d0d9f144865dea979be83&units=metric&q=";
let btn = document.querySelector(".search-btn");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let city = document.querySelector(".city");
let input = document.querySelector("#search");
let image = document.querySelector(".weather-icon");
async function weatherDefault() {
    const responseDefault = await fetch(apiUrl + "london");
    const apiJsonDefault = await responseDefault.json();
    temp.innerText = `${apiJsonDefault.main.temp}°C`;
    humidity.innerText = `${apiJsonDefault.main.humidity} %`;
    wind.innerText = `${apiJsonDefault.wind.speed} Km/hr`;
    image.src = `images/${apiJsonDefault.weather[0].main}.png`;
}
async function checkWeather(){
    let cityName = document.querySelector("#search").value;
    const response = await fetch(apiUrl + cityName);
    const apiJson = await response.json();
    temp.innerText = `${apiJson.main.temp}°C`;
    humidity.innerText = `${apiJson.main.humidity} %`;
    wind.innerText = `${apiJson.wind.speed} Km/hr`;
    image.src = `images/${apiJson.weather[0].main}.png`;
    city.innerText = cityName;
}
btn.addEventListener(("click"), (evt) => {
    evt.preventDefault();
    checkWeather();
})
window.addEventListener(("load"), () => {
    weatherDefault();
})
input.addEventListener(("keypress"), (event) => {
if(event.keyCode === 13){
    checkWeather();
}
});

