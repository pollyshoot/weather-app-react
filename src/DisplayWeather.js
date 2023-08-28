import React, { useState } from "react";
import axios from "axios";

export default function DisplayWeather(props) {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState(null);

  let [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
      cityName: response.data.name,
      description: response.data.weather[0].main,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  let form = (
    <form onSubmit={handleSubmit} className="form-box">
      <input type="search" placeholder="Type a city..." onChange={getCity} />
      <button type="submit">Search</button>
      {/* <button type="submit">Current City</button> */}
    </form>
  );

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function error (error) {
    console.log(error)
    alert("Enter exicting city")
  }


  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0479fec9478c6c9031d035f5c5efc126&units=metric`;

    axios.get(url).then(showWeather).catch(error);
  }
  if (loaded) {
    return (
      <div>
        {form}
        <h3>Current weather in {weather.cityName}</h3>
        <ul>
          <li>Description: {weather.description}</li>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} m/s</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <h3>Let's search for the weather somewhere!</h3>
      </div>
    );
  }
}
