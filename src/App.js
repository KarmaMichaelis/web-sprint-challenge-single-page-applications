import React,{useState} from "react";
//import {v4 as uuid} from 'uuid'
import Pizza from './Components/Pizza'

const App = (props) => {
  // const [pizza,setPizza]=useState('')
  
  // const onInputChange=event=>{
  //   const {pizzaType}=event.target.value
    
  //     setPizza({
  //       ...pizza,
        
  //     })
    
  // }
  
  return (
    <>
     <div>
     <h1>Food For Code</h1>
      
      
      <Pizza 
      //values={formValues} 
      //onChange={onInputChange}
      //onSubmit={onSubmit}
      />
     </div>
    </>
    
  );
};
export default App;
