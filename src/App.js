import React from 'react';
import Keys from "./components/Keys/Keys";
import Controller from "./components/Controller/Controller";
import './App.css';
import Navigation from "./components/Navbar"


function App() {
  return (
    <div>

    <div id="drum-machine" >
  <Navigation />
  <span id="circle">JS</span>
      <Keys />
      <Controller />
      
    </div>
    </div>
    
  );
}

export default App;
