import { useState } from 'react';
import './styles.css';
function WeatherApp(){
    const [lat,setLat]=useState("");
    const month=new Date().getMonth()+1;
   navigator.geolocation.getCurrentPosition((position)=>{setLat(position.coords.latitude)});
   var message="";
   if(lat>0&&(month>=10||month<=3)){
    message="Its Chill in the north"
   }else if(lat<=0&&(month<=10&&month>=3)){
    message="Its Chill in the south";
   }else if(lat>0&&(month<=10&&month>=3)){
    message="Hot in North";
   }else if(lat<=0&&(month>=10||month<=3)){
    message="Hot in South";
   }else{
    message="God is calculating"
   }
   var arr=message.split(" ");
   var flag=arr.includes("Hot");
    return(
        <>
        <div className="wa">{message}</div>
        {flag?<img src="https://www.shutterstock.com/image-vector/realistic-sun-icon-weather-design-260nw-1384281425.jpg"></img>:
        <img class="chill" src="https://images.unsplash.com/photo-1603739421258-4aa79ad860df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHNub3d8ZW58MHx8MHx8&w=1000&q=80"></img>}
        </>
    )
}
export default WeatherApp;