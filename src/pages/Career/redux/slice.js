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
//   reducers: {
//     fetchJobsSuccessSync : (state, action) => {
//       state.loading = false;
//       state.jobs = action.payload;
//     },
//   },
   extraReducers : (builder) => {
    builder.addCase(fetchJobs.fulfilled, (state, action)=>{
        state.loading = false;
        state.jobs = action.payload;
    })
   }
    // fetchJobsSuccess : (state, action) => {
    //   state.loading = false;
    //   state.jobs = action.payload;
    // },
    // fetchJobsFailure(state, action) {
    //   state.loading = false;
    //   state.error = action.payload;
    // },

});

export const {  fetchJobsSuccess, fetchJobsFailure } = careerSlice.actions;
export default careerSlice.reducer;
