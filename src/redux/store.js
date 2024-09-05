import { configureStore } from '@reduxjs/toolkit'
import { isOpenSlice } from './isOpenSlice'
export const store = configureStore({
    reducer: {
        isOpen: isOpenSlice.reducer,
    }
})