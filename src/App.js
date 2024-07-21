import React, { useState } from 'react';
import './App.css';
import GridView from './GridView';



function App() {
  const [Productvisible, setProductvisible]= useState(false);  
  const [Buttonvisible, setButtonvisible]= useState(false); 
  function onloadDate(){    
    setProductvisible(true);
    setButtonvisible(true);
  }
  return (
    <div className='App'>
      <div hidden={Buttonvisible}>Welcome to my page</div>
     <button className='button' onClick={onloadDate} hidden={Buttonvisible}>Click here to load Data</button>
     { Productvisible ? <GridView/> : <div></div> }
    </div>
    
  );
}

export default App;
