import { createSelector } from "reselect";
const career  = (state)=>state.career
export const selectJobs = createSelector([career],(state) => state?.jobs?.jobs);
export const selectJobsError = createSelector([career],(state) => state?.error);
export const selectJobsLoading=createSelector([career],(state) => state?.loading);