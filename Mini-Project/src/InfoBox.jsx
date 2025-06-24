
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/2165741070/photo/scenic-views-of-mumbai-india.jpg?s=1024x1024&w=is&k=20&c=vGVGcLSDlzrk7bnVrNbDtzcMPK202OgflYhmn9jg4Io=";

    const HOT_URL="https://media.istockphoto.com/id/988274822/photo/young-mother-and-child-with-heatstroke.jpg?s=1024x1024&w=is&k=20&c=UW10e-494hn24JLuXKymmdsXgyjRKwXuWFsGRBYlGqM=";
    const COLD_URL="https://images.unsplash.com/photo-1457269449834-928af64c684d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1196403576/photo/heavy-rain-shower.jpg?s=1024x1024&w=is&k=20&c=MZ1ZjA0TXLl7BZ_s2tgu3jA02VfRRzhFs1F8f52VL_8=";
    return(
    
        <div className="InfoBox">
            {/* <h1>WeatherInfo -{info.weather}</h1> */}
            <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
                
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{info.humidity>80? <ThunderstormIcon />:info.temp>15?<SunnyIcon/>:<AcUnitIcon/>}
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