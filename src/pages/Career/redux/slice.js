import { createSlice } from '@reduxjs/toolkit';
import { fetchJobs } from './thunk';

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const careerSlice = createSlice({
  name: 'career',
  initialState,

   extraReducers : (builder) => {
    builder.addCase(fetchJobs.fulfilled, (state, action)=>{
        state.loading = false;
        state.jobs = action.payload;
    })
   }


});

export default careerSlice.reducer;