import { configureStore } from "@reduxjs/toolkit";
import destinationSlice from "../data/destinationSlice";
import selectedTabSlice from "../data/selectedTabSlice";

const store = configureStore({
  reducer: {
    destination: destinationSlice.reducer,
    selectedTab: selectedTabSlice.reducer,
  },
});

export default store;
