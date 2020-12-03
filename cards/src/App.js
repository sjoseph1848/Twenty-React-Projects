import React, { useState } from 'react'
import './App.css';
import City from './City';
import Austin from './imgs/Austin.jpg';
import LA from './imgs/LA.jpg';
import Chi from './imgs/Chi.jpg';
import Denver from './imgs/Denver.jpg';
import STL from './imgs/STL.jpg';
import { act } from 'react-dom/test-utils';


function App() {
  return (
    <div className="container">
        <City img={Austin} loc="Austin"/>      
        <City img={LA} loc="Los Angeles"/>      
        <City img={Chi} loc="Chicago"/>      
        <City img={Denver} loc="Denver"/>      
        <City img={STL} loc="St. Louis"/>      
    </div>
  );
}

export default App;
