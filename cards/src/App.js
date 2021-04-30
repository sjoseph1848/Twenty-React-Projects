import React, { useState } from 'react';
import './App.css';
import Austin from './imgs/Austin.jpg';
import LA from './imgs/LA.jpg';
import Chi from './imgs/Chi.jpg';
import Denver from './imgs/Denver.jpg';
import STL from './imgs/STL.jpg';

function App() {
  const panels = document.querySelectorAll('.panel');

  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      removeActiveClasses();
      panel.classList.add('active');
    });
  });

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });
  }

  return (
    <div className='container'>
      <div className='panel' style={{ backgroundImage: `url(${Austin})` }}>
        <h3>Austin</h3>
      </div>
      <div className='panel' style={{ backgroundImage: `url(${LA})` }}>
        <h3>Los Angeles</h3>
      </div>
      <div className='panel' style={{ backgroundImage: `url(${Chi})` }}>
        <h3>Chicago</h3>
      </div>
      <div className='panel' style={{ backgroundImage: `url(${Denver})` }}>
        <h3>Denver</h3>
      </div>
      <div className='panel' style={{ backgroundImage: `url(${STL})` }}>
        <h3>St. Louis</h3>
      </div>
    </div>
  );
}

export default App;
