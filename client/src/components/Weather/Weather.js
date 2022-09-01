import "./Weather.css";
import { useState, useEffect } from "react";

const appId = process.env.REACT_APP_APP_URL;
const apiUrl = process.env.REACT_APP_API_URL;

export default function Weather() {
  // const [isOpen, setIsOpen] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    const result = await fetch(
      `${apiUrl}/weather?zip=30032&appid=${appId}&units=imperial`
    ).then((res) => res.json());

    setWeatherData(result);
  };

  useEffect(() => {
    fetchData();

    // console.log("weatherData: ", weatherData);
  }, []);

  // const handleClick = () => {
  //   console.log("clicked.");
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="Weather">
      {weatherData ? (
        <div className="weather-container">
          {/* <div>{weatherData.name}</div> */}
          <div className="weather-simple">
            <div style={{ fontSize: "15px" }}>
              {weatherData.weather[0].description}
            </div>
            <span>
              <img
                alt="icon"
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              />
            </span>
          </div>

          <div>
            {/* <div>temp: {Math.round(weatherData.main.temp)}&#176;</div> */}
            {/* <div>
              feels like: {Math.round(weatherData.main.feels_like)}&#176;
            </div> */}
            <div style={{ fontSize: "15px" }}>
              low: {Math.round(weatherData.main.temp_min)}&#176;
            </div>
            <div style={{ fontSize: "15px" }}>
              high: {Math.round(weatherData.main.temp_max)}&#176;
            </div>
            <div style={{ fontSize: "15px" }}>
              humidity: {weatherData.main.humidity}%
            </div>
            {/* <div>
              sunrise:{" "}
              <span>
                {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                  "en-US",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              </span>
            </div> */}
            <div style={{ fontSize: "15px" }}>
              sunset:{" "}
              <span>
                {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                  "en-US",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div>can't fetch weather.</div>
      )}

      {/* <div id="buttons">
        {isOpen ? (
          <button onClick={handleClick}>&#9650;</button>
        ) : (
          <button onClick={handleClick}>&#9660;</button>
        )}
      </div> */}
    </div>
  );
}
