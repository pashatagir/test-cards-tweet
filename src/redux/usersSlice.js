import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, changeUser } from "./usersOperations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const usersSlice = createSlice({
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
      .addCase(fetchUsers.rejected, handleRejected)
      //
      .addCase(changeUser.pending, handlePending)
      .addCase(changeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        //
        // if (state.items[index].followers === action.payload.followers) {
        //   state.items[index].followers += 1;
        // } else {
        //   state.items[index].followers -= 1;
        // }
        //
        state.items.splice(index, 1, action.payload);
      })
      .addCase(changeUser.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
