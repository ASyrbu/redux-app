import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./services/cryptoApi";
import { cryptoNewsApi } from "./services/cryptoNewsApi";
import userReducer from "./services/slices/userSlice";


export const store1 = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        cryptoApi.middleware,
        cryptoNewsApi.middleware
    )

});