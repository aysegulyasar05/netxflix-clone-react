
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { movieReducer } from './reducers/movieReducer'
import thunk from "redux-thunk"

const rootReducers = combineReducers({
    movieReducer,
});


export default createStore(rootReducers, applyMiddleware(thunk)); 