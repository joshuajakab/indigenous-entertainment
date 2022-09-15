import { all, call } from 'redux-saga/effects';
import showSagas from './Shows/shows.sagas';

export default function* rootSaga() {
    yield all([
        call(showSagas)
    ])
};
