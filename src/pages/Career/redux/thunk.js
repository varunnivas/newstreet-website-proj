
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJobs = createAsyncThunk("jobs",
  async () => {
    try {
        const response = await fetch('https://nst-website-api.onrender.com/api/v1/jobs');
        const data = await response.json();
        return data;
      } catch (error) {
        return error
      }
  } 
)