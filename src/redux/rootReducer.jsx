import { baseApi } from "./api/baseApi";
import jobModelSlice from "./jobs/jobModelSlice";
export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  jobModel:jobModelSlice
  
};

