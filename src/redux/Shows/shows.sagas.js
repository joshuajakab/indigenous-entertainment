import { auth } from '../../firebase/utils';
import { takeLatest, put, all, call, take } from 'redux-saga/effects';
import { fetchShowsStart, setShows } from './shows.actions';
import { handleAddShow, handleFetchShows, handleDeleteShow } from './shows.helpers';
import showsTypes from './shows.types';

export function* addShow({ payload }) {
    try {
        const timestamp = new Date();
        yield handleAddShow({
            ...payload,
            //showAdminUserUID: auth.currentUser.uid,
            createdDate: timestamp
        });
        yield put(
            fetchShowsStart()
        );
    } catch (err) {
        console.log(err)
    }
};

export function* onAddShowStart() {
    yield takeLatest(showsTypes.ADD_SHOW_START, addShow)
};

export function* fetchShows({ payload }) {
    try {
        const shows = yield handleFetchShows(payload);
        yield put(
            setShows(shows)
        )
    } catch (err) {
        alert(err)
    }
};

export function* onFetchShowsStart() {
    yield takeLatest(showsTypes.FETCH_SHOWS_START, fetchShows)
};

export function* deleteShow({ payload }) {
    try {
        yield handleDeleteShow(payload);
        yield put(
            fetchShowsStart()
        );
    } catch (err) {
        console.log(err)
    }
};

export function* onDeleteShowStart() {
    yield takeLatest(showsTypes.DELETE_SHOW_START, deleteShow)
};

export default function* showSagas() {
    yield all([
        call(onAddShowStart),
        call(onFetchShowsStart),
        call(onDeleteShowStart)
    ])
}
