import React from 'react';

const Tmr = (props) => {

    if (props.timeLeft === null || props.timeLeft === 0) {
        return <div/>
    }
    return (
        <div className="row">
            <h1 id="timer-label"><strong>Time left: {props.timeLeft}</strong></h1>
        </div>
    )

};

export default Tmr;