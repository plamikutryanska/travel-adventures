import { createSlice } from "@reduxjs/toolkit";

const destinationSlice = createSlice({
  name: "destination",
  initialState: {
    selectedDestination: [],
  },
  reducers: {
    goToDestination: (state, action) => {
      state.selectedDestination = action.payload;
    },
  },
});

export default destinationSlice;
