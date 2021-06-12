import "./Weather.css";
import { useState, useEffect } from "react";

export default function Weather() {
  // const [isOpen, setIsOpen] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/weather?zip=30032&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeatherData(result);
      });
  };

  useEffect(() => {
    fetchData();

    console.log("weatherData: ", weatherData);

    // console.log(
    //   "Built-in env var NODE_ENV. Changes based on what mode you are in (dev, test, build): ",
    //   process.env.NODE_ENV
    // );
  }, []);

  // const handleClick = () => {
  //   console.log("clicked.");
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="Component Weather">
      {weatherData && weatherData ? (
        <div className="weather-container">
          {/* <div>{weatherData.name}</div> */}
          <div>
            <div>{weatherData.weather[0].description}</div>
            <span>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              />
            </span>
          </div>

          <div>
            <div>temp: {Math.round(weatherData.main.temp)}&#176;</div>
            <div>
              feels like: {Math.round(weatherData.main.feels_like)}&#176;
            </div>
            <div>low: {Math.round(weatherData.main.temp_min)}&#176;</div>
            <div>high: {Math.round(weatherData.main.temp_max)}&#176;</div>
            <div>humidity: {weatherData.main.humidity}%</div>
            <div>
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
            </div>
            <div>
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
        <div>no weather data</div>
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
