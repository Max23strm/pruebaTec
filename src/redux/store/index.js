import { configureStore } from '@reduxjs/toolkit'
import carSliceReducer from '../cartSlice'


export const store = configureStore({
    reducer: {
        cartSlice: carSliceReducer,
    },
  })