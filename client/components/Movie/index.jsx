import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import movies from '../../../movies.json';
import * as fetchBooks from "./actions/index";
import './movie.css';

class Movie extends React.Component {
    componentWillMount() {

        console.log('has',this.props.match.params.id);
        this.props.fetchMovies(movies);
        this.props.fetchMovie(this.props.match.params.id)
    }

    componentWillUpdate(next) {

        console.log('next',next);
        // if (this.props.match.params.id !== next.params.id) {
        //     this.props.fetchMovie(next.params.id)
        // }
    }

    render() {
        const {
            movie = {
                starring: []
            }
        } = this.props;

        return (
            <div
                className='movie-inner'
                style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`}}>

                qwefsadfasdfasdasdf
                <div
                    className='cover'
                    style={{backgroundImage: `url(${movie.cover})`}} />
                <div className='description'>
                    <div className='title'>{movie.title}</div>
                    <div className='year'>{movie.year}</div>
                    <div className='starring'>
                        {movie.starring.map((actor = {}, index) => (
                            <div
                                key={index}
                                className='actor'>
                                {actor.name}
                            </div>
                        ))}
                    </div>
                </div>
                <Link
                    className='closeButton'
                    to="/movies">
                    ←
                </Link>
            </div>
        )
    }
}

const mapStateToProps = ({movies}) => {
    return {
        movies: movies.all,
        movie: movies.current
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: movies => dispatch(fetchBooks.fetchMovies(movies)),
        fetchMovie: movie => dispatch(fetchBooks.fetchMovie(movie))
    };
};

export default connect(mapStateToProps,  mapDispatchToProps)(Movie);