import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut} from '../../context/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    prepareHeaders: (headers, { getState }) => {
        //headers.set('Content-Type', 'application/json')
        //headers.set("Accept", "application/json");
        
        const token = getState().auth.tokenc
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    },
    credentials: 'include'
})

const baseQueryIfExpiredToken = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryIfExpiredToken,
    endpoints: builder => ({})
})