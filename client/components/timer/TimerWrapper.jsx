import React from 'react';

import Button from 'timer/Button';
import Tmr from 'timer/Tmr';
import StopStarBtn from 'timer/StopStarBtn';
import CancelResetBtn from 'timer/CancelResetBtn';
import Audio from 'timer/Audio';
import Slider from 'timer/Slider';

class TimerWrapper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            timeLeft: null,
            timer: null,
            maxTime: null,
            hideTimer: false,
            style: {
                display: 'block'
            }};

        this.startTimer = this.startTimer.bind(this);
        this.startStopTimer = this.startStopTimer.bind(this);
    }

    startTimer(setTime, maxTime) {

        // setTime *= 60;

        clearInterval(this.state.timer);

        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) clearInterval(timer);
            this.setState({timeLeft: timeLeft})
        }, 1000);

        return this.setState({timeLeft: setTime, timer: timer, maxTime: maxTime || null})
    };

    startStopTimer(hideTimer) {

        if (hideTimer === null) {
            this.setState({style: {display: 'block'}});
        } else {
            this.setState({style: {display: 'none'}});
        }

        var hasTimer = this.state.timer;

        if (hasTimer) {
            clearInterval(hasTimer);
            this.setState({timer: null});
        } else {
            this.startTimer(this.state.timeLeft, this.state.maxTime)
        }
    }

    render() {
        return (
            <div className="row">
                <div className="btn-group">
                    <Button time={5} startTimer={this.startTimer}/>
                    <Button time={10} startTimer={this.startTimer}/>
                    <Button time={15} startTimer={this.startTimer}/>
                </div>

                <div className="btn-group">
                    <StopStarBtn hasTimer={this.state.timer} startStopTimer={this.startStopTimer}/>
                    <CancelResetBtn hasTimer={this.state.timer} startStopTimer={this.startStopTimer}/>

                </div>

                <div style={this.state.style}>
                    <Tmr timeLeft={this.state.timeLeft}/>
                </div>

                <div>
                    <Audio timeLeft={this.state.timeLeft}/>
                </div>

                <div>
                    <Slider value={this.state.timeLeft || 0} min={0} max={this.state.maxTime}/>
                </div>
            </div>
        )
    }
}

export default TimerWrapper;