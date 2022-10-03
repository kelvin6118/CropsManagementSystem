import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CMSState {
    user: String | null
}

const initialState: CMSState = {
    user: "test"
}

export const CMSSlice = createSlice({
    name: 'cms',
    initialState,
    reducers:{
       
    }
})

export const {} = CMSSlice.actions

export default CMSSlice.reducer
