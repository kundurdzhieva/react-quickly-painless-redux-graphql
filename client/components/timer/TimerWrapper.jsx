import React from 'react';

import Timer from 'Timer';
import Button from 'Button';

class TimerWrapper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {timeleft: null, timer: null};

        this.startTimer = this.startTimer.bind(this);
    }

    startTimer(timeLeft) {
        clearInterval(this.state.timer);

        let timer = setInterval(() => {

            var timeleft = this.state.timeleft - 1;
            if (timeleft === 0) clearInterval(timer);
            this.setState({timeLeft: timeLeft})
        }, 1000);

        return this.setState({timeLeft: timeLeft, timer: timer})
    }

    render() {

        return (
            <div className="row-fluid">

                <h2>Timer</h2>
                <div className="btn-group" role="group">
                    <Button time="5" startTimer={this.startTimer}/>
                    <Button time="10" startTimer={this.startTimer}/>
                    <Button time="15" startTimer={this.startTimer}/>
                </div>

                <Timer time={this.state.timeLeft}/>

                <audio id="end-of-time" src="flute_v_long_01.wqv" preload="auto"></audio>
            </div>
        )
    }
}

export default TimerWrapper;