import { combineReducers } from 'redux';
import chars from './charReducers';

const rootReducer = combineReducers({
    chars
})

export default rootReducer