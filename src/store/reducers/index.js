import {combineReducers} from 'redux';
import homeReducers from './home';
import newsReducers from "./news";

const reducers = combineReducers({
    home: homeReducers,
    news: newsReducers,
});

export default reducers;

