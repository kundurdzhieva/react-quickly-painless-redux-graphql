import React from 'react';
import movies from '../../../movies.json';
import {connect} from 'react-redux';
import * as fetchBooks from './actions/index';
const styles = require('./movies.css')

class Movies extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovies(movies);
        console.log('grah', this.props)
    }

    render() {

        return (
            <div className={styles.movies}>
                asdasdasd
                {/*<div className={params.id ? styles.listHidden : styles.list}>*/}
                    {/*{movies.map((movie, index) => (*/}
                        {/*<Link*/}
                            {/*key={index}*/}
                            {/*to={`/movies/${index + 1}`}>*/}
                            {/*<div*/}
                                {/*className={styles.movie}*/}
                                {/*style={{backgroundImage: `url(${movie.cover})`}} />*/}
                        {/*</Link>*/}
                    {/*))}*/}
                {/*</div>*/}
                {/*{children}*/}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // You can now say this.props.books
        movies: state.movies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: movies => dispatch(fetchBooks.fetchMovies(movies))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);