import React from 'react';

class Button extends React.Component {

    render () {

        return (
            <button type="button"
              className="btn btn-default"
            onClick={this.props.startTimer.bind(null, this.props.time)}>
                {this.props.time} seconds
            </button>
        )
    }
}

export default Button;