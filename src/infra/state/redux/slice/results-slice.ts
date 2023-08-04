import { LaunchResults } from '@/domain/models/launch-results'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

/** Fetch launches from backend */
export const fetchResults = createAsyncThunk<LaunchResults[], void>(
  'fetchLaunches',
  async () => {
    const response = await axios.get<LaunchResults[]>(`
      http://127.0.0.1:8000/launches/results`)
    console.log('Data:', response.data)
    return response.data
  }
)

interface LaunchResultsState {
  isLoading: boolean
  isError: boolean
  data: LaunchResults[] | null
}

const initialState: LaunchResultsState = {
  isLoading: false,
  isError: false,
  data: null
}

const launchResultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResults.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchResults.fulfilled,
      (state, action: PayloadAction<LaunchResults[]>) => {
        state.isLoading = false
        state.data = action.payload
      }
    )
    builder.addCase(fetchResults.rejected, (state, action) => {
      console.log('Error:', action.error)
      state.isError = true
    })
  }
})

export default launchResultsSlice.reducer
