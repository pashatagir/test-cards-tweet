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
        const { id, followers } = action.payload;
        const updatedUserIndex = state.items.findIndex(
          (item) => item.id === id
        );
        if (updatedUserIndex !== -1) {
          if (state.items[updatedUserIndex].followers > followers) {
            state.items[updatedUserIndex].followers -= 1;
          } else {
            state.items[updatedUserIndex].followers += 1;
          }
        }
      })
      .addCase(changeUser.rejected, handleRejected);
    //
  },
});

export const usersReducer = usersSlice.reducer;
