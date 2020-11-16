import counterReducer from './counterReducer';
import timerReducer from './timerReducer';
import blogReducer from './blogReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    timer: timerReducer,
    blog: blogReducer,
});

export default rootReducer;