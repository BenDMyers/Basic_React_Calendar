import { combineReducers } from 'redux';
import ViewReducer from './reducer_view';

const rootReducer = combineReducers({
    view: ViewReducer
});

export default rootReducer;
