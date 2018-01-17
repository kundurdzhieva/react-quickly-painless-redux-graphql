
const { handleActions } = require('redux-actions')

const FETCH_MOVIES = 'FETCH_MOVIES'
const FETCH_MOVIE = 'FETCH_MOVIE'

module.exports = {
    fetchMoviesActionCreator: (movies) => ({
        type: FETCH_MOVIES,
        movies
    }),
    fetchMovieActionCreator: (index) => ({
        type: FETCH_MOVIE,
        index
    }),
    reducer: handleActions({
        [FETCH_MOVIES]: (state, action) => ({
            ...state,
            all: action.movies
        }),
        [FETCH_MOVIE]: (state, action) => ({
            ...state,
            current: state.all[action.index - 1]
        })
    }, {
        movies: [],
        movie: {}
    })
}