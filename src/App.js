import "./App.css";

import DisplayWeather from "./DisplayWeather";

export default function App() {
  return (
    <div className="App container">
      <DisplayWeather city="Hannover" />
    </div>
  );
}
