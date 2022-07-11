import React, { useState } from 'react';
import './styles.scss';
import { searchCity, searchDepartment, searchRegion } from 'france-cities-js';
import { generateUniqueKey } from 'src/functions';
// import { setCity } from 'src/actions';
import PropTypes from 'prop-types';
import WeatherWidget from '../WeatherWidget';

function City({ setCityA }) {
const [city, setCityE] = useState([]);
const [cityO, setCityO] = useState([]);
const [cityCp, setCityCp] = useState([]);

    const search = (e) => {
        if (e.target.value.length > 0) {
        document.getElementById('dlist').style.display = 'block';
        setCityE(searchCity.byName(`${e.target.value}`, 20))
        console.log(searchCity.byName(`${e.target.value}`, 20))
        } else {
            document.getElementById('dlist').style.display = 'none';
        }
    }

    const resize = () => {
      // alert("Votre résolution d'écran est: " + window.innerWidth + "x" + window.innerHeight);
    }

    const setCityWeather = (city) => {
      console.log(city.zip_code)
      setCityO(city.name)
      setCityCp(city.zip_code)
      document.getElementById('dlist').style.display = 'none';
      document.getElementById('citySearch').value = '';
    }

    window.onresize = resize;
  return (
   <div>
    <input type="text" id="citySearch" autoCapitalize="off" className="input_city" onChange={(e) => search(e)} />
    <datalist id="dlist" className="city_datalist">
        {city.length >= 1 && city.map((cit) => (
          <option
            className='option'
            value={`${cit.name}`}
            key={generateUniqueKey(cit)}
            onClick={(e) => setCityWeather(cit)}
          > {`${cit.name} (${cit.zip_code}) `}
          </option>
        ))}
        </datalist>
        <WeatherWidget city={cityO} code={cityCp}/>
   </div>
 
 );
}

City.propTypes = {
  setCityA: PropTypes.func.isRequired,
};

export default City;
