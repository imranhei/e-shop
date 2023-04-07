import { createSlice } from '@reduxjs/toolkit'

export const users = createSlice({
  name: 'counter',
  initialState: {
    userList: [],
  },
  reducers: {
    addUser: (state, action) => {
        state.userList.push(action.payload)
    },
  },
})

export const { addUser, removeUser } = users.actions

export default users.reducer