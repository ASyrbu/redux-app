
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cryptoApi } from "./services/cryptoApi";
import { cryptoNewsApi } from "./services/cryptoNewsApi";
import userReducer from "./services/slices/userSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PURGE, PERSIST]
            }
        }).concat(cryptoApi.middleware, cryptoNewsApi.middleware),
});

export const persistor = persistStore(store);