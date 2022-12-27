import { apiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    tagTypes: ['Users'],
    endpoints: builder => ({
        getAllUsers: builder.query({
            query: () => '/user/all',
            providesTags: ['Users']
        }),
        changeUserVerificationStatus: builder.mutation({
            query: fields => ({
                url: '/user/update',
                method: 'PUT',
                body: {...fields}
            }),
            invalidatesTags: ['Users']
        }),
    })
})

export const {
    useGetAllUsersQuery,
    useChangeUserVerificationStatusMutation
} = usersApiSlice