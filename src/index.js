import "./styles.css";

const weatherURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const key = 'A2NS9VYU4AG72XUKCQTFPS8NK';

function getWeather(location) {
  let url = `${weatherURL}${location}?key=${key}`;
  fetch(url, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
    });
}

getWeather('Hanahan');
