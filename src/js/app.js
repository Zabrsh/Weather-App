import {getData,coordinateUrl,forecastUrl,getCoordinates,getForecast} from './api';
import {renderWeatherInfo} from './rendering';
import '../style.css';
import './mini'

const searchBox = document.querySelector('.search-box-input');
const searchIcon = document.querySelector('.search');



let unitReload = false;
let lastCity = 'auckland';


async function getWeatherData(initialLoad = false) {

    try {

      let cityName;
    // default weather location on initial load
    if (initialLoad) {
      cityName = 'auckland';
    } else {
      // if not initial load, get relevent weather data
      cityName = getData();
    }

    // if no name entered, exit function
    if (!cityName) {
      return;
    }
                
    if (unitReload) {
      cityName = lastCity;
    }

    // keep track of the last searched city, so when refreshing the data with changed units
    // the same current city will be searched for.
    lastCity = cityName;

        const requestCoordinateUrl = coordinateUrl(cityName);
        const coordinates = await getCoordinates(requestCoordinateUrl);

        const requestForecastUrl = forecastUrl(coordinates);
        const weatherData = await getForecast(requestForecastUrl);

        // weatherData.name = coordinates.name;
        // weatherData.country = coordinates.country;
        console.log(weatherData)

        
        renderWeatherInfo(weatherData);
        unitReload = false;

                
        
    } catch(err) {
         document.querySelector('.error-msg').style.visibility = 'visible'
         //console.log(err)
    }

    document.querySelector('.search-box-input').value = ''
}

getWeatherData(true);

searchIcon.addEventListener('click', () => {
    getWeatherData();
  });
  
  searchBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      getWeatherData();
    }
  });







//b2683aad3c4f753e5cbf0d0483f832d8
