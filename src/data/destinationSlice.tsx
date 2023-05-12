import { createSlice } from "@reduxjs/toolkit";
import { CountriesVisited } from "../components/explore-by-destination/explore-by-destination-utils";

const destinationSlice = createSlice({
  name: "destination",
  initialState: {
    selectedDestination: "",
  },
  reducers: {
    goToDestination: (state, action) => {
      state.selectedDestination = action.payload as CountriesVisited;
    },
  },
});

export default destinationSlice;
