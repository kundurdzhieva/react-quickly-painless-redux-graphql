import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {withRouter} from 'react-router'

import Contacts from './Contacts.jsx';
import Posts from './Posts.jsx';
import Post from './Post.jsx';

const Home = ({routes}) => <h2>Home</h2>;
const About = ({routes}) => <h2>About</h2>;

import posts from '../../../posts.json';

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {posts: posts}
    }
    
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <ul className="nav navbar-nav">
                                <Li activeOnlyWhenExact={true} to="/" label="Home"/>
                                <Li to="/about" label="About"/>
                                <Li to="/posts" posts={this.state.posts} label="Posts"/>
                                <Li to="/contacts" label="Contacts"/>
                            </ul>
                        </div>
                    </nav>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/posts" component={Posts}/>
                    <Route path="/posts/:id" component={Post}/>
                    <Route path="/contacts" component={withRouter(Contacts)}/>
                </div>
            </Router>
        )
    }
}

const Li = ({label, to, activeOnlyWhenExact, posts}) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
        <li className={match ? 'active' : ''}><Link to={{pathname: to, state: {posts}}}>{label}</Link>
        </li>
    )}/>
);

export default NavBar;