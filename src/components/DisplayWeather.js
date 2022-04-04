import React from "react";
function DisplayWeather(props) {
  const { data } = props;
  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country},
            </span>
            <span className="cardsubtitle">
            &nbsp; at {new Date().toLocaleTimeString()}
            </span>

            <h1>
              {" "}
              {Math.floor(data.main.temp)}
              <sup>o</sup>
            </h1>
            <span className="weather-description">
              {" "}
              {data.weather[0].description}
            </span>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;