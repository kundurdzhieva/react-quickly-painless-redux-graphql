import React from 'react';
import PropTypes from 'prop-types';

class Contacts extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render() {
        const {match, location, history} = this.props;
        setTimeout(() => {
            history.push('/')
        }, 1000);
        return (
            <div>You are now at {location.pathname}</div>
        )

    }
}

export default Contacts;