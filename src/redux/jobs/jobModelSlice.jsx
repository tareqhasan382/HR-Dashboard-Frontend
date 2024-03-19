import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isHovered: false
};
const jobModelSlice = createSlice({
    name: "jobModel",
    initialState,
    reducers: {
        hovered: (state, action) => { 
            state.isHovered = action.payload;
         },
    },
});

export const { hovered } = jobModelSlice.actions;
export default jobModelSlice.reducer;
