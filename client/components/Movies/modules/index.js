import { combineReducers } from 'redux';

const {
    reducer: movies
} = require('./movies');

export default combineReducers({
    movies
});