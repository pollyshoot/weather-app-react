import "./App.css";

import DisplayWeather from "./DisplayWeather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <DisplayWeather city="Hannover" />
        </div>
        <div className="source-link">
          <a href="https://github.com/pollyshoot/weather-app-react">
            Open-source code
          </a>
          , by Polina Radahuz
        </div>
      </div>
    </div>
  );
}
