function getData() {
    const userInput = document.querySelector('.search-box-input');
    const placeName = userInput.value;

    if(placeName) {
      return placeName
      .replace(/(\s+$|^\s+)/g, '')
      .replace(/(,\s+)/g, ',') 
      .replace(/(\s+,)/g, ',') 
      .replace(/\s+/g, '+');
    }

    return '';
}

function coordinateUrl(placeName) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=b2683aad3c4f753e5cbf0d0483f832d8`;
}

function forecastUrl(coordinates,units) {
     
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=20f7632ffc2c022654e4093c6947b4f4`;
}

async function getCoordinates(url) {
    const response = await fetch(url);
    const weatherData = await response.json();
    const {coord} = weatherData;

    coord.name = weatherData.name;
    coord.country = weatherData.sys.country;

    return coord;

}

async function getForecast(url) {
  const response = await fetch(url);
  const forecastData = await response.json();

  return forecastData;
}


export {
  getData,
  coordinateUrl,
  forecastUrl,
  getCoordinates,
  getForecast,
};