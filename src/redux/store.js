/**
 * Author: Quan Vo
 * Date: 4/16/19
 */

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import rootReducer from './reducer';
import {dispatcherMiddleware} from "redux-dispatcher";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(logger, dispatcherMiddleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;