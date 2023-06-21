import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersOperations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, handleRejected);
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
