import { configureStore } from '@reduxjs/toolkit'
import launchChartDataReducer from '../slice/chart-data-slice'
import launchReducer from '../slice/launch-slice'

export const store = configureStore({
  reducer: {
    launchReducer,
    launchChartDataReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
