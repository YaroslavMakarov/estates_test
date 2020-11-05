import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { loadState, saveState } from '../helpers/localStorage';
import estatesReducer from "./estates";
import { rootSaga } from "./rootSaga";

const rootReucer = combineReducers({
    estates: estatesReducer,
});

const persistedState = loadState();

const reduxSagas = createSagaMiddleware();

const store = createStore(rootReucer, persistedState, applyMiddleware(reduxSagas));

store.subscribe(() => {
    saveState(store.getState());
});

reduxSagas.run(rootSaga);

export default store;