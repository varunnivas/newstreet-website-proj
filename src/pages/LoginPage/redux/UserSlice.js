import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const hostName = "https://nst-website-api.onrender.com/api/v1/login";

// Thunk action to login user
export const loginUser = createAsyncThunk(
    'username/login',
    async (userCredential, thunkAPI) => {
        try {
            const response = await axios.post(`${hostName}`, userCredential);
            localStorage.setItem('user', JSON.stringify(response.data)); // Store user data in local storage
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('Access Denied! Invalid Credentials');
            } else {
                throw new Error('Error occurred while logging in');
            }
        }
    }
);

// Thunk action to retrieve user data from local storage
export const getUserFromLocalStorage = () => {
    const userData = localStorage.getItem('user');
    if (userData) {
        return JSON.parse(userData);
    }
    return null;
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: getUserFromLocalStorage(), 
        error: null
    },
    reducers: {
        logout: (state) => {
            state.loading = false;
            state.user = null;
            state.error = null;
            localStorage.removeItem('user'); 
        }
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
            });
    }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
