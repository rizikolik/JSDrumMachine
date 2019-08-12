import React from 'react';
import Keys from "./components/Keys/Keys";

import './App.css';
import Navigation from "./components/Navbar"


function App() {
  return (
    <div>

   
  <Navigation />
    <div className="circle small">
     <div id="display">
JS
     </div>
    </div>
 
  
  <div id="drum-machine" >
      <Keys />
   
      
    </div>
    </div>
    
  );
}

export default App;
