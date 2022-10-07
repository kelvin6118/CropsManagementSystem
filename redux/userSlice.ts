import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    value: String | null
}

const initialState = { value: "tester" } as UserState

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
     loggedIn(state, action: PayloadAction<boolean>) {
      state.value && action.payload
     }
    }
})

export const {loggedIn} = userSlice.actions

export default userSlice.reducer
