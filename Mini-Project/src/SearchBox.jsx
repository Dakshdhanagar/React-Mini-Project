import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./SearchBox.css"
import { useState } from 'react';



export default function SearchBox(){
    let [city,setCity]=useState(""); 


    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="d53cb23ad7e1c52919adfaef731e0dca";
    let getWeatherInfo =async () => {
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonRespose=await response.json();
        console.log(jsonRespose);
        let result={
            city:city,
            temp:jsonRespose.main.temp,
            tempMin:jsonRespose.main.temp_min,
            tempMax:jsonRespose.main.temp_max,
            humidity:jsonRespose.main.humidity,
            feelsLike:jsonRespose.main.feels_Like,
            weather:jsonRespose.weather[0].discription,
        }
        console.log(result);
    }

    

    let handelchange =(event)=>{
       setCity(event.target.value);     
    }

    let handelsubmit =(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
    return(
        <><div className="SearchBox">
            <h3>Search the weather</h3>
            <form onSubmit={handelsubmit}>
                 <TextField id="city" value={city} label="City Name" variant="standard" required onChange={handelchange}/>
                 <br />
                 <br />
                 <Button variant="contained" type='submit'> Search</Button>

            </form>
        </div>
        </>
    );
}