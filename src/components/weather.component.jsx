import React,{Component} from 'react';

class Weather extends Component{
    render(){
        return(
            <div className='container'>
                <div className='cards'>
                    <h1>{this.props.city},{this.props.country}</h1>
                    <h5 className="py-4">
                        <i className="wi wi-day-sunny display-1"/>
                    </h5>
                    <h1 className="py-2">{this.props.temp_celsius}&deg;</h1>
                    {minmaxTemp(this.props)}
                    <h4 className="py-4">{this.props.description}</h4>
                </div>
            </div>
        );
    }  
}

function minmaxTemp(props){
    return(
        <h3>
        <span className="px-4">{props.temp_min}&deg;</span>
        <span className="px-4">{props.temp_max}&deg;</span>
        </h3>
    );}



export default Weather;