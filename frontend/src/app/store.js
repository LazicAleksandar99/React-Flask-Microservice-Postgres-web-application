import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from '../context/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage,
  }

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

const presistedCombiend = combineReducers({
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer})

// const presistedApiSlice = persistReducer(persistConfig, apiSlice.reducer)

const presistedReducer = persistReducer(persistConfig, presistedCombiend)
// export const store = configureStore({
//     reducer: {
//         [apiSlice.reducerPath]: apiSlice.reducer,
//         auth: authReducer
//     },
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware().concat(apiSlice.middleware),
//     devTools: true
// })

export const store = configureStore({
    reducer: presistedReducer,
    middleware: getDefaultMiddleware =>
             getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
  })

export const persistor = persistStore(store)