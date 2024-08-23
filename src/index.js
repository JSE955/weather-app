import "./styles.css";

const weatherURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const key = 'A2NS9VYU4AG72XUKCQTFPS8NK';

async function getWeather(location) {
  let url = `${weatherURL}${location}?key=${key}`;
  const data = await fetch(url, {mode: 'cors'});
  const weatherData = await data.json();
  console.log(processCurrentConditions(weatherData));
  
 
}

function processCurrentConditions(weather) {
  return {
    location: weather.resolvedAddress,
    description: weather.currentConditions.conditions,
    date: weather.currentConditions.datetime,
    currentTemp: weather.currentConditions.temp,
    feelsLike: weather.currentConditions.feelslike,
    humidity: weather.currentConditions.humidity,
    rainChance: weather.currentConditions.precipprob,
    windSpeed: weather.currentConditions.windspeed,
  }
}

getWeather('Hanahan');

