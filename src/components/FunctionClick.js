import React from 'react'

//Goal => capture the click event

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked')
    }
    
    return (
        <div>
            <button onClick={clickHandler} >Click</button>
        </div>  
    )
}

export default FunctionClick
