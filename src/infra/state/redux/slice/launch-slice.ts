import { PaginatedLaunch } from '@/domain/models/paginated-launch-chart-data'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

/** Fetch launches from backend */
export const fetchLaunches = createAsyncThunk<PaginatedLaunch[], void>(
  'fetchLaunches',
  async () => {
    const response = await axios.get<PaginatedLaunch[]>(`
      http://127.0.0.1:8000/launches`)
    console.log('Data:', response.data)
    return response.data
  }
)

interface LaunchState {
  isLoading: boolean
  isError: boolean
  data: PaginatedLaunch[] | null
}

const initialState: LaunchState = {
  isLoading: false,
  isError: false,
  data: null
}

const launchSlice = createSlice({
  name: 'launch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLaunches.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchLaunches.fulfilled,
      (state, action: PayloadAction<PaginatedLaunch[]>) => {
        state.isLoading = false
        state.data = action.payload
      }
    )
    builder.addCase(fetchLaunches.rejected, (state, action) => {
      console.log('Error:', action.error)
      state.isError = true
    })
  }
})

export default launchSlice.reducer
