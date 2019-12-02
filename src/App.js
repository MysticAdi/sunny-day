import React,{Component} from 'react';
import './App.css';
import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from './components/weather.component';

const API_key = "6bd0baedd8fcda02e468c1c4051dee1b";

class App extends Component{
  constructor(){
    super();
    this.state={
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };

    this.getweather();
  }

  calCelsius(temp)
  {
    let cel = Math.floor(temp-273.15);
    return cel;
  }

  getweather = async e => {
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_key}`);
    const response = await api_call.json();
    console.log(response); 

    this.setState({
      city: response.name,
      country: response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
      temp_min:this.calCelsius(response.main.temp_min),
      description:response.weather[0].description
    })
  };

  render(){
    return(
      <div className='App'>
        <Weather city={this.state.city} country={this.state.country} temp_celsius={this.state.celsius} 
        temp_max={this.state.temp_max} temp_min={this.state.temp_min} description={this.state.description}/>
      </div>
    );
  }
}

export default App;
