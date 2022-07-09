import React, { useState } from 'react';
import './styles.scss';
import { searchCity, searchDepartment, searchRegion } from 'france-cities-js';
import { generateUniqueKey } from 'src/functions';

function City() {
const [city, setCity] = useState([]);

    const search = (e) => {
        if (e.target.value.length > 0) {
        document.getElementById('dlist').style.display = 'block';
        setCity(searchCity.byName(`${e.target.value}`, 20))
        console.log(searchCity.byName(`${e.target.value}`, 20))
        } else {
            document.getElementById('dlist').style.display = 'none';
        }
    }

    const resize = () => {
      alert("Votre résolution d'écran est: " + screen.width + "x" + screen.height);
    }

    window.onresize = resize;
  return (
   <div>
    <input type="text" id="citySearch" autocapitalize="off" className="input_city" onChange={(e) => search(e)} />
    <datalist id="dlist" className="city_datalist">
        {city.length >= 1 && city.map((cit) => (
          <option
            value={`${cit.name}`}
            key={generateUniqueKey(cit)}
          > {`${cit.name} (${cit.zip_code}) `}
          </option>
        ))}
        </datalist>
   </div>
 );
}

export default City;
