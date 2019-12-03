import React,{Component} from 'react';

class Weather extends Component{
    render(){
        return(
            <div className='container text-light'>
                <div className='cards pt-4'>
                    <h1>{this.props.city}</h1>
                    <h5 className="py-4">
                        <i className={`wi ${this.props.weathericon} display-1`}/>
                    </h5>

                    {this.props.temp_celsius? (<h1 className="py-2">{this.props.temp_celsius}&deg;</h1>):null}  

                    {minmaxTemp(this.props)}
                    <h4 className="py-4">{this.props.description}</h4>
                </div>
            </div>
        );
    }  
}

function minmaxTemp(props){
    if(props.temp_min && props.temp_max)
    {return(
        <h3>
        <span className="px-4">{props.temp_min}&deg;</span>
        <span className="px-4">{props.temp_max}&deg;</span>
        </h3>
    );}
}



export default Weather;