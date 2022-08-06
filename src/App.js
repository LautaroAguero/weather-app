import React, {useEffect,useState} from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import Weather from './components/weather';
import './App.css';

function App() {
  const [data,setData] = useState([]);  

  useEffect(() => {   
    navigator.geolocation.getCurrentPosition( async (position)=>{    
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result);
        console.log(result);      
      })
      .catch(error => { console.log(error); });    
    }); 
   
  }, []); 
  
  
    return (
    <div className="App">
      {typeof data.main !== 'undefined' ? (
        <Weather weatherData = {data}/>
      ) :(
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
       </div>
      )}
    </div>
  );
}

export default App;
