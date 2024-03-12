import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const hostName = "https://nst-website-api.onrender.com/api/v1/login";

export const loginUser = createAsyncThunk(
    'username/login',
    async (userCredential, thunkAPI) => {
        try {
            const response = await axios.post(`${hostName}`, userCredential);
            localStorage.setItem('user', JSON.stringify(response.data)); // Assuming response contains user data
            return response.data;
        } catch (error) {
            // Handle different error scenarios appropriately
            if (error.response && error.response.status === 401) {
                throw new Error('Access Denied! Invalid Credentials');
            } else {
                throw new Error('Error occurred while logging in');
            }
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.error.message;
            })
    }
});

export default userSlice.reducer;
