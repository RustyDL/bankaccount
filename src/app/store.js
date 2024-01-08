import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/transactionsSlice"; // Import your transactionsSlice reducer

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});
