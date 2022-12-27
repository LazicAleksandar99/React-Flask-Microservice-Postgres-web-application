import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: { user: null},
    reducers: {
        setUser: (state, action) => {
            const { user } = action.payload
            state.user = user
        },
        clearUser: (state, action) => {
            state.user = null
        }
    },
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer

export const selectCurrentUser = (state) => state.user.user
//export const selectCurrentProducts = (state) => state.auth.products