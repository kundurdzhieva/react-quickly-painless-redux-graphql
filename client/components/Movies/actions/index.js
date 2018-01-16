export const fetchMovies = (movies) => {

    return {
        type: 'FETCH_MOVIES',
        movies: movies
    };
};