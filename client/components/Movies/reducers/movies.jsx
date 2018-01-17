const initialState = {
    movies: [],
    movie: {}
}

export default (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_MOVIES':

            return {
                ...state,
                all: action.movies
            };

        case 'FETCH_MOVIE':

            console.log('action.index', action, 'state', state);
            return {
                ...state,
                current: state.all[action.movie - 1]
            };

        default:
            return state;
    }
};