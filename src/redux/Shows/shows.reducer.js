import showsTypes from "./shows.types";

const INITIAL_STATE = {
    shows: []
};

const showsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case showsTypes.SET_SHOWS:
            return {
                ...state,
                shows: action.payload
            }
        default:
            return state;
    }
};

export default showsReducer;
