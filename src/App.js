import React, {useState} from "react";
import {v4 as uuid} from 'uuid'
import Pizza from './Components/Pizza'

const App = () => {
  //const [formValues,setFormValues]=useState()
  return (
    <>
      <h1>Food For Code</h1>
      <img src='Assets/Pizza.jpg' alt=' pizza'/>
      
      <Pizza 
      // values={formValues} 
      // onInputChange={onInputChange}
      // onSubmit={onSubmit}
      />
    </>
    
  );
};
export default App;
