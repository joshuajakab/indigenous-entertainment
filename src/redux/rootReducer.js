import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import showsReducer from './Shows/shows.reducer';

export const rootReducer = combineReducers({
    showsData: showsReducer
});

const configStorage = {
    key: 'root',
    storage
}

export default persistReducer(configStorage, rootReducer);
