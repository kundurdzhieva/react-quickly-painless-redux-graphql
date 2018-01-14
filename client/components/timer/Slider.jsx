import React from 'react';

const Slider = (props) => {
    return (
        <input type="range"
               value={props.value}
               step={props.step}
               min={props.min}
               max={props.max}/>
    )
};

export default Slider;