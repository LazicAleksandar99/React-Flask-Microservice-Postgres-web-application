import { configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "./api/apiSlice"
import authReducer from '../context/authSlice'
import {presistStore, presistReducer} from "redux-persist";
import storage from 'redux-presist/lib/storage'
import {createStore, applyMiddleware} from 'redux'



const presistConfig = {
    key: "main-root",
    storage,
}

const presistedReducer = presistReducer(presistConfig, authReducer)

const storeTwo = createStore(presistedReducer,applyMiddleware)

const Presistor=presistStore(storeTwo);

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export {Presistor}
export default storeTwo;