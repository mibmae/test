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
        } else {
            document.getElementById('dlist').style.display = 'none';
        }
    }

  return (
   <div>
    <input type="text" id="citySearch" className="inputCity" onChange={(e) => search(e)} />
    {/* <div>{city.map((c) => c.name)}</div> */}
    <datalist id="dlist">
        {city.length >= 1 && city.map((cit) => (
          <option
            value={`${cit.name}`}
            key={generateUniqueKey(cit)}
            // onClick={(e) => SelectCity(e.target.textContent.replace(/^./, ''), region.code, false, true)}
          > {`${cit.name}`}
          </option>
        ))}
        </datalist>
   </div>
 );
}

export default City;
