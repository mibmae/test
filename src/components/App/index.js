// == Import npm
import React from 'react';

// == Import
import City from 'src/containers/City';
import Counter from 'src/containers/Counter';
import WeatherWidget from 'src/components/WeatherWidget';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <City />
    {/* <Counter /> */}
  </div>
);

// == Export
export default App;
