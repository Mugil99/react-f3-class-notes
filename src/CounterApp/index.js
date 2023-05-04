import './styles.css';
import React, { useState } from 'react'

function CounterApp() {
    let [count,setCount]=useState(0);
    function increament(){
        if(count<=10){
            setCount(count++);
        }
        else{
          alert("cant go above 10");
        }
    }
    function decreament(){
        if(count>0){
            setCount(count--);
        }
        else{
          alert("cant go below 1");
        }        
    }
  return (
    <>
    <button onClick={increament}>+</button>
    <div>{count}</div>
    <button onClick={decreament}>-</button>

    </>
  )
}

export default CounterApp;