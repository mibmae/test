// == Import npm
import React from 'react';

// == Import
import City from 'src/components/City';
import Counter from 'src/containers/Counter';
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
