import {combineReducers} from 'redux';
import auth from './auth.reducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    auth,
    routing: routerReducer
});

export default rootReducer;


