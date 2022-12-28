import { apiSlice } from "../../app/api/apiSlice";

export const announcementsApiSlice = apiSlice.injectEndpoints({
    tagTypes: ['Announcements'],
    endpoints: builder => ({
        getAllAnnouncements: builder.query({
            query: () => '/announcement/all',
            providesTags: ['Announcements']
        }),
        addAnnouncement: builder.mutation({
            query: fields => ({
                url: '/announcement/add',
                method: 'POST',
                body: {...fields}
            }),
            invalidatesTags: ['Announcements']
        }),
        deleteAnnouncement: builder.mutation({
            query: (id) => ({
                url: `/announcement/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Announcements']
        }),
    })
})

export const {
    useGetAllAnnouncementsQuery,
    useAddAnnouncementMutation,
    useDeleteAnnouncementMutation,
} = announcementsApiSlice