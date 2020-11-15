import { all } from 'redux-saga/effects';

import { dispatchEstatesWatcher } from './estates';

export function* rootSaga() {

    yield all([
        dispatchEstatesWatcher(),
    ])
}