import { configureStore } from '@reduxjs/toolkit'
//imports the default reducer from modeSlice
import modeReducer from './features/modeSlice'
//exports the store with the entire modeReducer
export const store = configureStore({
    reducer: modeReducer

})

