import React from 'react';

const Loader =(props) => {
    return (
        <div class="ui active inverted dimmer">
              <div class="ui big text loader" style={{color:'orange'}}>{props.message}</div>
        </div>
    )
}

export default Loader;