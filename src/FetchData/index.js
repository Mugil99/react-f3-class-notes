import './styles.css';
import {useState} from 'react';
function FetchData(){
    const[data,setData]=useState({});
    function fetching(){
        fetch("https://dummyjson.com/quotes/random").then((response)=>
            response.json()
        
        ).then((json)=>{
            setData(json);
            console.log(json);
        })
    }
    const keys=Object.keys(data);
    return(
       <>
      
        <button onClick={fetching}>fetchie</button>
        {keys.map((key)=>{
        return(<h2>{data[key]}</h2>)
       })}
       </>
     
      )
}
export default FetchData;