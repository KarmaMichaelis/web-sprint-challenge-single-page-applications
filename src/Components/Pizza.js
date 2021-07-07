import React from 'react'






export default function Pizza(props){
    //console.log('hello from the pizza component')
    const{
        values,
        onInputChange,
        OnSubmit,

    }=props
    return(
        <form>
            <div className='food contaner'>
            <img src='Assets/Pizza.jpg' alt=' pizza'/>

                <h2>Build Your Own Pizza</h2>
                <div className='Food Form'>
                        <h2>Choice of Size</h2>
                        <p>Required</p>
                        <label>
                            
                            <select
                                //name='size'
                                //value={values.size}
                                onChange={onInputChange}
                            
                            >
                                <option value=''>---Select Size---</option>
                                <option value='Large'>Large</option>
                                <option value='Medium'>Medium</option>
                                <option value='Small'>Small</option>
                                <option value='Slice'>Slice</option>



                            </select>
                          </label>
                          <h2>Choice of Sauce</h2>
                            <p>Required</p>
                          <label>
                          
                            Original Red&nbsp;
                            <input
                                type='radio'
                                onChange={onInputChange}
                                //checked={values.topping==='Pepperoni'}
                                value='Original Red'
                            
                            
                            /><br/>
                            BBQ&nbsp;
                            <input
                                type='radio'
                                onChange={onInputChange}
                                //checked={values.topping==='Pepperoni'}
                                value='BBQ'
                            
                            
                            /><br/>
                            Garlic Ranch&nbsp;
                            <input
                                type='radio'
                                onChange={onInputChange}
                                //checked={values.topping==='Pepperoni'}
                                value='Garlic Ranch'
                            
                            
                            /><br/>
                            Spinach Alfredo&nbsp;
                            <input
                                type='radio'
                                onChange={onInputChange}
                                //checked={values.topping==='Pepperoni'}
                                value='Spinach Alfredo'
                            
                            
                            />




                          </label>



                </div>







            </div>





        </form>




    )
}