import { LaunchChartData } from '@/domain/models/launch-chart-data'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

/** Fetch launches from backend */
export const fetchChartData = createAsyncThunk<LaunchChartData[], void>(
  'fetchLaunches',
  async () => {
    const response = await axios.get<LaunchChartData[]>(`
      http://127.0.0.1:8000/launches/stats`)
    console.log('Data:', response.data)
    return response.data
  }
)

interface LaunchChartDataState {
  isLoading: boolean
  isError: boolean
  data: LaunchChartData[] | null
}

const initialState: LaunchChartDataState = {
  isLoading: false,
  isError: false,
  data: null
}

const launchSlice = createSlice({
  name: 'launch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChartData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchChartData.fulfilled,
      (state, action: PayloadAction<LaunchChartData[]>) => {
        state.isLoading = false
        state.data = action.payload
      }
    )
    builder.addCase(fetchChartData.rejected, (state, action) => {
      console.log('Error:', action.error)
      state.isError = true
    })
  }
})

export default launchSlice.reducer
