import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: { user: null},
    reducers: {
        setUser: (state, action) => {
            const { user } = action.payload
            state.user = user[0]
            console.log('setovanje usera: ')
            console.log(user[0])
        },
        changeUser: (state, action) => {
            console.log('change user')
            console.log(state)
            console.log(action.payload)
            state.user.name = action.payload.name
            state.user.last_name = action.payload.last_name
            state.user.email = action.payload.email
            state.user.birthday = action.payload.birthday
        },
        clearUser: (state, action) => {
            state.user = null
        }
    },
})

export const { setUser, changeUser, clearUser } = userSlice.actions

export default userSlice.reducer

export const selectCurrentUser = (state) => state.user.user