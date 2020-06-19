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

                <h2>Build Your Own Pizza</h2>
                <div className='Food Form'>
                        <h2>Choice of Size</h2>
                        <p>Required</p>
                        <label>
                            <input type='text'/>



                        </label>



                </div>







            </div>





        </form>




    )
}