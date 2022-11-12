import { configureStore } from '@reduxjs/toolkit'
import  productReducer  from './reducers/productReducer'

export const store = configureStore({
    reducer: {
        productReducer:productReducer,
    },
})
//phải lấy đc Type của state (quan trọng)
export type RootState = ReturnType<typeof store.getState>
// lấy đc Type của dispatch
export type AppDispatch = typeof store.dispatch