import { apiSlice } from "../app/api/apiSlice";

export const registerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        registration: builder.mutation({
            query: credentials => ({
                url: '/sign/up',
                method: 'POST',
                body: { ...credentials }
            })
        }),
    })
})

export const {
    useRegistrationMutation
} = registerApiSlice