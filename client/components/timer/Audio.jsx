import React from 'react';

const Audio = (props) => {

    if (props.timeLeft === 0) {
        document.getElementById('end-of-time').play();
    }

    return (
        <audio id="end-of-time" src="assets/FHP_RHODES EFFECT1_120_C.WAV" preload="auto"/>
    )
};

export default Audio;