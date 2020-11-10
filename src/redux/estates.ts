import { put, takeEvery,
         call } from 'redux-saga/effects';
import { Action } from 'redux';         

import { getEstates } from '../helpers/api';
import { RootState } from './rootStore';       

//action types
export const FETCH_ESTATES = 'estates_test/estates/fetch';
const SET_ESTATES = 'estates_test/estates/set';

//action creator types
type FetchEstates = Action<typeof FETCH_ESTATES>;
type SetEstates = Action<typeof SET_ESTATES> & {
    estates: Array<Estate>;
}

//action creators
export const fetchPosts = (): FetchEstates => ({
    type: FETCH_ESTATES,
});
const setEstates = (estates: Array<Estate>): SetEstates => ({
    type: SET_ESTATES,
    estates,
});

//sagas
function* dispatchEstates() {
    const estates = yield call(getEstates);

    yield put(setEstates(estates));
};

export function* dispatchEstatesWatcher() {

    yield takeEvery('estates_test/estates/fetch', dispatchEstates);
};

//initialState Type
export type InitialEstateState = {
    estates: Array<Estate>
};

//initialState
const initialState: InitialEstateState = {
    estates: [],
};

//all action types
export type AllEstatesAction = FetchEstates | SetEstates;

//reducer
const estatesReducer = (state=initialState, action: AllEstatesAction) => {
    switch(action.type) {
        case SET_ESTATES: return {
            estates: action.estates,
        };

        default: return state;
    };
};

//selectors
export const estatesSelector = (state: RootState) => (state.estates.estates);

export default estatesReducer;
