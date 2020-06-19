import React,{useState} from "react";
//import {v4 as uuid} from 'uuid'
import Pizza from './Components/Pizza'


const intialFormValues={
  role:'',
  topping:'',
}

const onSubmit=evt=>{
  evt.preventDefault()
}


const App = (props) => {
  const [pizza,setPizza]=useState(intialFormValues)
  
  // const onInputChange=event=>{
  //   const {pizzaType}=event.target.value
    
  //     setPizza({
  //       ...pizza,
        
  //     })
    
  // }
  
  return (
    <>
     <div>
       <h3>Home</h3>
       <h3>Help</h3>
     <h1>Food For Code</h1>
      
      
      <Pizza 
      //values={formValues} 
      //onChange={onInputChange}
      onSubmit={onSubmit}
      />
     </div>
    </>
    
  );
};
export default App;
