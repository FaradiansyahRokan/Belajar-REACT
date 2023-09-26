import './App.css';
import React, { useState } from 'react';
import Intro from './components/intro';


function App() {
  const [getNavbarValue , setNavbarValue] =useState('');

  const changeNavbarValue = () => {
    setNavbarValue("myContact")
  };

  return (
    <div>
      <h1>Hello Guys</h1>
      <p>Ini Adalah : Props </p>
      <Intro name="rokan"/>
      <Intro name="subhi"/>
      <h1>Ini Button</h1>
      <p>{getNavbarValue}</p>
            <button onClick={() => changeNavbarValue()}>Ubah Navigasi</button>
    </div>
  );
}

export default App;
