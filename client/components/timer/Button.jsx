import React from 'react';

class Button extends React.Component {

    handleTimer() {
        this.props.startTimer(this.props.time, this.props.time)
    }

    render() {

        return (
            <button
                className="btn btn-default"
                onClick={this.handleTimer.bind(this)}
            >{this.props.time} seconds</button>
        )
    }
}

export default Button;