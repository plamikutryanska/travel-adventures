import { configureStore } from "@reduxjs/toolkit";
import destinationSlice from "../data/destinationSlice";

const store = configureStore({
  reducer: {
    destination: destinationSlice.reducer,
  },
});

export default store;
