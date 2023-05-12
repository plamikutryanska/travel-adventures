import { createSlice } from "@reduxjs/toolkit";
import { AvailableLinks } from "../components/home-page-banner/home-page-banner";

const selectedTabSlice = createSlice({
  name: "selectedTab",
  initialState: {
    selectedTab: "home",
  },
  reducers: {
    goToSelectedTab: (state, action) => {
      state.selectedTab = action.payload as AvailableLinks;
    },
  },
});

export default selectedTabSlice;
