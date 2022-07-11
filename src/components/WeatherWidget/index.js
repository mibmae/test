import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './style.scss';
import store from 'src/store';

function WeatherWidget({ city, code }) {
  console.log('ODE', code)
  if (city === undefined) { city = 'Saint-Ambroix'}
  if (code === undefined) { code = '30500'}
  const [desc, setDesc] = useState('');
  const [temperature, setTemperature] = useState('');
  const [icon, setIcon] = useState('');
  // au 1e rendu du composant je veux charger les données météo
  // pour la ville passée en props
  useEffect(() => {
    const loadData = async () => {
      const apiKey = 'e957c727743a6de50f5fab1fccce6b61';

      try {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&units=metric&lang=fr&appid=${apiKey}`)
        .then((response) => response.json())
        .then((res) => {
          console.log(res)
          setIcon(res.weather[0].icon);
      //   // console.log(code);
      //   // console.log(icon, data.weather[0].icon);
        setTemperature(Math.round(res.main.temp));
        setDesc(res.weather[0].description);
          // Object.keys(res).forEach((key) => {
          //   const tabli = res[key].map((e) => `${e.placeName} (${e.postalCode})`);
          //   setCitiesAround(tabli);
          });
        } catch (error) {
          console.log('error', error)
        }
      //   const { data } = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&units=metric&lang=fr&appid=${apiKey}`, {
      //     Method: 'GET',
      //   });
      //   // const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${code},fr&units=metric&lang=fr&appid=${apiKey}`);
      //   setIcon(data.weather[0].icon);
      //   // console.log(code);
      //   // console.log(icon, data.weather[0].icon);
      //   setTemperature(Math.round(data.main.temp));
      //   setDesc(data.weather[0].description);
      // }
      // catch (error) {
      //   console.log('error', error);
      // }
    };

    loadData();
    console.log('tintintint')
  }, [city]);

  return (
    <div className="weather-widget">
      <div className="weather-widget__left-col">
        <p className="weather-widget__city">{city}</p>
        <p className="weather-widget__temperature">{temperature} °C</p>

        <img className="weather-widget__icon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
        {/* <p className="weather-widget__desc">{desc}</p> */}
      </div>
      {/* <div className="weather-widget__right-col">
        <p className="weather-widget__temperature">{temperature} °C</p>
        
      </div> */}
    </div>
  );
}

WeatherWidget.propTypes = {
  city: PropTypes.string,
  code: PropTypes.string.isRequired,
};

export default WeatherWidget;
