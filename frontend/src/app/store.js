import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from '../context/authSlice';
//import productReducer from '../context/product/productSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER  } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
  }

const presistedCombiend = combineReducers({
        auth: authReducer,
        //products: productReducer,
        [apiSlice.reducerPath]: apiSlice.reducer})

const presistedReducer = persistReducer(persistConfig, presistedCombiend)

export const store = configureStore({
    reducer: presistedReducer,
    middleware: getDefaultMiddleware =>
             getDefaultMiddleware({
                serializableCheck: {
                  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
              }).concat(apiSlice.middleware),
    devTools: true,
  })

export const persistor = persistStore(store)