import "./Weather.css";
import { useState, useEffect } from "react";

const appId = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

export default function Weather() {
  // const [isOpen, setIsOpen] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async () => {
    const result = await fetch(
      `${apiUrl}/weather?zip=30032&appid=${appId}&units=imperial`
    ).then((res) => res.json());

    if (result.message.length) {
      setErrorMsg(result.message);
      setWeatherData(null);
    } else {
      setWeatherData(result);
    }
    // console.log("weatherData: ", weatherData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const handleClick = () => {
  //   console.log("clicked.");
  //   setIsOpen(!isOpen);
  // };

  const errorResponse = (
    <p style={{ fontSize: "15px" }}>
      <span style={{ color: "tomato", fontWeight: 900, padding: 10 }}>
        Error
      </span>{" "}
      fetching data:
      <br />
      <br />
      <p style={{ padding: 10, fontSize: "12px" }}>{errorMsg}</p>
    </p>
  );

  if (errorMsg && errorMsg.length) {
    return errorResponse;
  }

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
        "oops"
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
