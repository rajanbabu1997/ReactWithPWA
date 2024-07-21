import React, { useState } from 'react';
import './App.css';
import GridView from './GridView';



function App() {
  const [Productvisible, setProductvisible]= useState(false);  
  function onloadDate(){    
    setProductvisible(true);
  }
  return (
    <div>
     <button onClick={onloadDate}> loadButton</button>
     { Productvisible ? <GridView/> : <div></div> }
    </div>
    
  );
}

export default App;
