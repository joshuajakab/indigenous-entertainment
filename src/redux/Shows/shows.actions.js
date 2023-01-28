import showsTypes from "./shows.types";

export const addShowStart = showData => ({
    type: showsTypes.ADD_SHOW_START,
    payload: showData
});

export const fetchShowsStart = pageSize => ({
    type: showsTypes.FETCH_SHOWS_START,
    payload: pageSize
});

export const setShows = shows => ({
    type: showsTypes.SET_SHOWS,
    payload: shows
});

export const deleteShowStart = documentID => ({
    type: showsTypes.DELETE_SHOW_START,
    payload: documentID
});
