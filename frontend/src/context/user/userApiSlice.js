import { apiSlice } from "../../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        changeUserProfile: builder.mutation({
            query: fields => ({
                url: '/user/change',
                method: 'PUT',
                body: {...fields}
            })
        }),
    })
})

export const {
    useChangeUserProfileMutation
} = userApiSlice