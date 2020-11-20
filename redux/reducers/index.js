import counterReducer from './counterReducer';
import timerReducer from './timerReducer';
import blogReducer from './blogReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    timer: timerReducer,
    blog: blogReducer,
    search: searchReducer,
});

export default rootReducer;