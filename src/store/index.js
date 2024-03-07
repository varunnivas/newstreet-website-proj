import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import globalReducer from '../redux/slice';
import  landingPageReducer  from '../pages/LandingPage/redux/slice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: storageSession,
    whitelist: [],
};

const rootReducer = combineReducers({
    global: globalReducer,
    landingPage: landingPageReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});

export let persistor = persistStore(store);
