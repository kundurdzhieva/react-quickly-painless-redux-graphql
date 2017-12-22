import React from 'react';

class Timer extends React.Components {

    render() {
        if (this.props.timeLeft === 0) {
            document.getElementById('end-of-time').play()
        }

        if (this.props.timeleft === null || this.props.timeleft === 0)
            return <div />;

        return <h1>Time left: {this.props.timeLeft}</h1>
    }
}

export default Timer;