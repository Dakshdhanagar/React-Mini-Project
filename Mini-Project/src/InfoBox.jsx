
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox(){
    const INIT_URL="https://media.istockphoto.com/id/2165741070/photo/scenic-views-of-mumbai-india.jpg?s=1024x1024&w=is&k=20&c=vGVGcLSDlzrk7bnVrNbDtzcMPK202OgflYhmn9jg4Io=";

    let info={
        city:"Delhi",
        fellsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:" haze",
    };
    return(
        
        <div className="InfoBox">
            <h1>WeatherInfo -{info.weather}</h1>
            <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
                
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>MinTemperatur = {info.tempMin}&deg;C</p>
          <p>MaxTemperatur = {info.tempMax}&deg;C</p>
           <p>The weather feels like = {info.fellsLike}&deg;C</p>
        
          
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}