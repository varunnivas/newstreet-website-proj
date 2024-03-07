import { createAsyncThunk } from '@reduxjs/toolkit';

import apiService from '../service/apiService';

export const getGroupLifecycleMasterLevel = createAsyncThunk(
    'GROUP_LIFECYCLE_MASTER_LEVEL',
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiService.get(
                '/lifecycle/v1/group/master/levels'
            );
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getCustomerLifecycleMasterLevel = createAsyncThunk(
    'CUSTOMER_LIFECYCLE_MASTER_LEVEL',
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiService.get(
                '/lifecycle/v1/customer/master/levels'
            );
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getLatestReportDownloadLink = createAsyncThunk(
    'GET_LATEST_REPORT_DOWNLOAD_LINK',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiService.post('data/v1/report/getReport', {
                payload,
            });
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
