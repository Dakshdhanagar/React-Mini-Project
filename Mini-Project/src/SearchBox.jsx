import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./SearchBox.css"
import { useState } from 'react';



export default function SearchBox({updateInfo}){
    let [city,setCity]=useState(""); 
    let [error,setError]=useState(false);


    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="xxx";
    let getWeatherInfo =async () => {
      try{
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
        return result;
      }catch(err){
       throw err;
      }
    }

    

    let handelchange =  (event)=>{
       setCity(event.target.value);     
    }

    let handelsubmit =async (event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);
        }catch(error){
             setError(true);
        }
       
    }
    return(
        <><div className="SearchBox">
            <h3>Search the weather</h3>
            <form onSubmit={handelsubmit}>
                 <TextField id="city" value={city} label="City Name" variant="standard" required onChange={handelchange}/>
                 <br />
                 <br />
                 <Button variant="contained" type='submit'> Search</Button>
                 {error && <p style={{ color: "red" }}>⚠️ No such place exists in the API!</p>}

            </form>
        </div>
        </>
    );
}