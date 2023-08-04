import { configureStore } from '@reduxjs/toolkit'
import launchReducer from '../slice/launch-slice'

export const store = configureStore({
  reducer: {
    launchReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
