import { put, takeEvery,
         call } from 'redux-saga/effects';

import { getEstates } from '../helpers/api';       

//action types
const FETCH_ESTATES = "estates_test/estates/fetch";
const SET_ESTATES = "estates_test/estates/fetch";

//action creators
export const fetchPosts = () => ({
    type: FETCH_ESTATES,
});
const setEstates = (estates) => ({
    type: SET_ESTATES,
    estates,
});

//sagas
function* dispatchEstates() {
    const estates = yield call(getEstates);

    yield put(setEstates(estates));
};

export function* dispatchEstatesWatcher() {

    yield takeEvery("estates_test/estates/fetch", dispatchEstates);
};

//initialState
const initialState = {
    estates: [],
};

//reducer
const estatesReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_ESTATES: return {
            estates: action.estates,
        };

        default: return state;
    };
};

//selectors
export const estatesSelector = (state) => (state.estates.estates);

export default estatesReducer;
