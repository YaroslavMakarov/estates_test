import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import estatesReducer from "./estates";
import { rootSaga } from "./rootSaga";

const rootReucer = combineReducers({
    estates: estatesReducer,
});

const reduxSagas = createSagaMiddleware();

const store = createStore(rootReucer, applyMiddleware(reduxSagas));

reduxSagas.run(rootSaga);

export default store;