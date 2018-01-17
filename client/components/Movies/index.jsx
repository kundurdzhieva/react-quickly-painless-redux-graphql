import React from 'react';
import {connect} from 'react-redux';
import {
    Link
} from 'react-router-dom'

import * as fetchBooks from './actions/index';
import movies from '../../../movies.json';
import './movies.css';


class Movies extends React.Component {

    constructor(props){
        super(props);

    }

    componentWillMount() {
        this.props.fetchMovies(movies);

    }

    render() {

        const {
            children,
            movies = []
        } = this.props;

        const params = this.props.match.params;

        return (
            <div className='movies'>

                <div className={params.id ? 'listHidden' : 'list'}>
                    {movies.map((movie, index) => (
                        <Link
                            key={index}
                            to={`/movies/${index + 1}`}>
                            <div
                                className='movie'
                                style={{backgroundImage: `url(${movie.cover})`}} />
                        </Link>
                    ))}
                </div>
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({movies}) => {
    return {
        movies: movies.all
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: movies => dispatch(fetchBooks.fetchMovies(movies))
    };
};

export default connect(mapStateToProps,  mapDispatchToProps)(Movies);