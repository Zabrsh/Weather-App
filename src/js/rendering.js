import { formatDate, formatTime } from "./mini";
const weatherDescription  = document.querySelector('.weather-classification');
const city = document.querySelector('.weather-city');

const time = document.querySelector('.weather-time');
const temprature = document.querySelector('.weather-info-temprature-celcius');
const weatherIcon = document.querySelector('.weather-info-icon');


function renderWeatherInfo(data) {
   const date =document.querySelector('.weather-date');
weatherDescription.textContent = data.current.weather[0].description;
city.textContent = data.sys.country;
date.textContent = data.current.weather[0].description;
time.textContent = data.current.weather[0].description;
temprature.textContent = data.current.weather[0].description;
      
}

export {renderWeatherInfo}
