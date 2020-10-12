import { combineReducers } import from 'redux';

// zawiera informacje o wszystkich reducerach
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
    rates: appReducer,
    // tutaj dodajemy inne reducery
});