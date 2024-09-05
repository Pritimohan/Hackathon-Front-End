import { createSlice } from '@reduxjs/toolkit'

export const isOpenSlice = createSlice({
    name: "isOpen",
    initialState: {
        isOpen: false
    },
    reducers: {
        toggleIsOpen: (state, action) => {
            state.isOpen = action.payload
        }
    }
})

export const { toggleIsOpen } = isOpenSlice.actions
export default isOpenSlice.reducer;