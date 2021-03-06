import '../../assets/style.css';
import React from 'react';

import NavBar from 'navBar/NavBar';
import Tooltip from 'Tooltip';
import Timer from 'timer/TimerWrapper';

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <NavBar/>

                <h1>Tooltip Widget</h1>
                <Tooltip text="The book you are reading now">React Quickly</Tooltip>
                was published in 2017. It's awesome!

                <Timer/>
            </div>);
    }
}