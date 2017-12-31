import React from 'react';

const CancelResetBtn = (props) => {

    function handleStartStopTimer() {
        props.startStopTimer(props.hasTimer)
    }

    return (
        <button className="btn btn-danger" onClick={handleStartStopTimer}>
            {props.hasTimer ? 'cancel' : 'reset'}</button>
    )
};

export default CancelResetBtn;