export default (state = [], action) => {

    switch (action.type){

        case 'FETCH_MOVIES':

            return {
                ...state,
                all: action.movies
            };
        case 'FETCH_MOVIE':
            return {
                ...state,
                current: action.movies
            };
        default:
            return state;
    }
};