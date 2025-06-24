import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        fellsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:" haze",
    })
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
   return(
    <div style={{textAlign:"center"}}>
        <h2>Weather App by InoGenius</h2>
         <SearchBox updateInfo={updateInfo}  />
        <InfoBox info={weatherInfo}/>
       
    </div>
   ); 
}