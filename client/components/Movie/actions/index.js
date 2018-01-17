export const fetchMovie = (index) => {

    return {
        type: 'FETCH_MOVIE',
        movie: index
    };
};

export const fetchMovies = (movies) => {

    return {
        type: 'FETCH_MOVIES',
        movies: movies
    };
};