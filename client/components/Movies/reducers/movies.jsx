export default (state = [], action) => {


    switch (action.type){

        case 'FETCH_MOVIES':
console.log('aaaaaaa', state)
            return [
                ...state,
                Object.assign({}, action.movies)
            ]
        case 'FETCH_MOVIE':
            return {
                ...state,
                current: action.movie
            };
        default:

            console.log('ccccccc')
            return state;
    }
};