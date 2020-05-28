import React from "react";
import './SeasonDisplay.css';

const getSeason = (lat, month)=>{
    if(month >2 && month < 9){
        return lat > 0 ? 'summer': 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer :{
        text: "It's summer, let's hitt the beach!",
        icon: "huge yellow sun icon"
    },
    winter:{
        text: "Brr winter, it's chilli!",
        icon: "huge blue snowflake icon"
    }
}

const SeasonDisplay = (props) => {
    console.log(props.lat);
    const season = getSeason( props.lat, new Date().getMonth());
   
    const {text, icon} = seasonConfig[season];

    return (
      <div>
        <i className={`top-left ${icon}`}></i>
        <h1>{text}</h1>
        <i className={`bottom-right ${icon}`}></i>
      </div>
    )
}

export default SeasonDisplay;