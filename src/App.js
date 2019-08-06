import React from 'react';
import Keys from "./components/Keys/Keys";
import Controller from "./components/Controller/Controller";


import './App.css';
import MenuAppBar from './components/menu';

function App() {
  return (
    <div>
<MenuAppBar />
    <div id="drum-machine" >
      
      <Keys />
      <Controller />
      
    </div>
    </div>
    
  );
}

export default App;
