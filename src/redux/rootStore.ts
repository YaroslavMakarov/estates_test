import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { loadState, saveState } from '../helpers/localStorage';
import estatesReducer, { InitialEstateState } from './estates';
import { rootSaga } from './rootSaga';

export const rootReucer = combineReducers({
    estates: estatesReducer,
});

const persistedState = loadState();

const reduxSagas = createSagaMiddleware();

const store = createStore(rootReucer, persistedState, applyMiddleware(reduxSagas));

store.subscribe(() => {
    saveState(store.getState());
});

reduxSagas.run(rootSaga);

//root state type
export type RootState = {
    estates: InitialEstateState;
};

export default store;
