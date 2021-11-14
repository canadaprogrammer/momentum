document.addEventListener('DOMContentLoaded', () => {
  const weather_output = document.querySelector('#weather');
  const API_KEY = '7d91988239d070118da74c34ea13ab33';

  const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(weather_url)
      .then((response) => response.json())
      .then((data) => {
        const city = data.name;
        const weather = data.weather[0].main;
        const temperature = Math.round(data.main.temp); // celsius
        const wind = data.wind.speed; // meter/sec
        let fall = 0;

        if (weather.toLowerCase() == 'rain') {
          fall = `${data.rain['1h']} mm \u2602, wind: ${wind} m/s`;
        }
        if (weather.toLowerCase() == 'snow') {
          fall = `${data.snow['1h']} mm \u2603, wind: ${wind} m/s`;
        }
        weather_output.textContent = `${city}, ${temperature}\u2103, ${weather} ${
          fall !== 0 ? fall : ''
        }`;
      });
  };
  const onGeoError = () => {
    alert('Unable to retrieve your location');
  };
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
