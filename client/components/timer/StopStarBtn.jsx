import React from 'react';

const StopStartBtn = (props) => {

    return (
        <button className="btn btn-primary" onClick={props.startStopTimer}>
            {props.hasTimer ? 'stop': 'start'}</button>
    )
};

export default StopStartBtn;