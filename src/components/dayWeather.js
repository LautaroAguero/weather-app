import moment from 'moment';
import React from 'react';
import './style.css';
import {Button} from 'semantic-ui-react';


const WeatherCard = ({weatherData}) => {    
    const refresh = () => {
        window.location.reload();
    }
    return(
        <div className="day-card-container">            
            <div className="shape-container">                
                <div className="sun">
                    <div className="elipse-1">
                        <div className="elipse-2"></div>                        
                    </div>
                </div>
            </div>
            <div className="info-container">
                <div className="pin-icon-container">
                    <div className="pin-solid-icon-sun"></div>
                    <div className="place-name">{weatherData.name}</div>
                </div>                
                <p className='date'>{moment().format('dddd')}</p>
                <p className='date'>{moment().format('LL')}</p>                
            </div>
            <div className="temp-container">
                <p className="temp">{Math.trunc(weatherData.main.temp)}&deg;</p>
                
            </div>
            <div className="refresh-container">
                <Button onClick={refresh} icon='refresh' circular></Button>            
            </div>
        </div>
       /*
        <div className="main">
            <div className='header'>
                <div className='name'>{weatherData.name}</div>
                <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh}/>
            </div>            
            <div className="flex">
                <p className='day'>Day: {moment().format('dddd')}</p>
                <p className='day'>{moment().format('LL')}</p>
            </div>
            <div className="flex">
                <p className='temp'>Temperature: {weatherData.main.temp} &deg;C</p>
                <p className='temp'>Humidity: {weatherData.main.humidity} %</p>
            </div>
            <div className="flex">
                <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
        </div>
        */
                 
    )
};

export default WeatherCard;