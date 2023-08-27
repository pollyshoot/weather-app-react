import "./App.css";

import DisplayWeather from "./DisplayWeather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>

      <DisplayWeather city="Hannover" />
    </div>
  );
}
