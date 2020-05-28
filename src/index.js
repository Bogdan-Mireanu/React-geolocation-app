import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";


class App extends React.Component{
    state = {
        lat:null,
        errorMessage:''
    };
    componentDidMount(){
        console.log('mounted');
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage:err.message}) 
        );
    }

    getContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
            };
            if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>    
            };
            return <Loader message="Please allow location request!"/>
    }
   
    render(){
        return (
            <div className="container">
                {this.getContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));