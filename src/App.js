import React from 'react';
import Keys from "./components/Keys/Keys";
import Controller from "./components/Controller/Controller";


import './App.css';

function App() {
  return (
    <div id="drum-machine" >
      <Keys />
      <Controller />
      
    </div>
  );
}

export default App;
