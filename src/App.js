import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div class="wing right"></div>
      <div class="wing left"></div>
      <div className="heart" onClick={toggleEnvelope}></div>
      <div id="wrapper">
        <div className={`top ${isOpen ? 'open' : 'close'}`}></div>
        <div className={`letter ${isOpen ? 'show' : 'hide'}`}>
          <p>Спасибо, что ты есть у меня!
          <br/> <br/> Твоя Малышка</p>    
        </div>
        <div className="envelope"></div>
      </div>
    </div>
  );
}

export default App;
