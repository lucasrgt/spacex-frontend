import { Launch } from '@/domain/models/launch'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

/** Fetch launches from backend */
export const fetchLaunches = createAsyncThunk<Launch[], void>(
  'fetchLaunches',
  async () => {
    const response = await axios.get<Launch[]>(`
      http://127.0.0.1:8000/launches`)
    console.log('Data:', response.data)
    return response.data
  }
)

interface LaunchState {
  isLoading: boolean
  isError: boolean
  data: Launch[] | null
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
      (state, action: PayloadAction<Launch[]>) => {
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
