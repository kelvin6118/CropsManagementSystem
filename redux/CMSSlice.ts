import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    value: String | null
}

const initialState = { value: "tester" } as UserState

export const CMSSlice = createSlice({
    name: 'cms',
    initialState,
    reducers:{
     loggedIn(state, action: PayloadAction<boolean>) {
      state.value && action.payload
     }
    }
})

export const {loggedIn} = CMSSlice.actions

export default CMSSlice.reducer
