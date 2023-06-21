import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6491febd2f2c7ee6c2c9450f.mockapi.io/api/v1";
export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
