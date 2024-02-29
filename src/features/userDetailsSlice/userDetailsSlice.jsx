import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  searchInput: "",
  filteredUsers: [],
};

///////// Creating Data Start/////////////////////////////
export const postData = createAsyncThunk(
  "userdetails/postData",
  async (data) => {
    const res = await axios.post(
      "https://65dcd150e7edadead7ecee4f.mockapi.io/crud",
      data
    );
    const result = await res.data;
    return result;
  }
);
///////// Creating Data End/////////////////////////////

///////// Reading Data Start/////////////////////////////
export const fetchData = createAsyncThunk("userDetails/fetchData", async () => {
  const res = await axios("https://65dcd150e7edadead7ecee4f.mockapi.io/crud");
  const data = await res.data;
  return data;
});
///////// Reading Data End/////////////////////////////

///////// Delete Data Start/////////////////////////////
export const deleteData = createAsyncThunk(
  "userDetails/deleteData",
  async (id) => {
    const res = await axios.delete(
      `https://65dcd150e7edadead7ecee4f.mockapi.io/crud/${id}`
    );
    const data = res.data;
    return data;
  }
);
///////// Delete Data End/////////////////////////////

///////// Update Data Start/////////////////////////////
export const updateData = createAsyncThunk(
  "userDetails/updateData",
  async (data) => {
    const res = await axios.put(
      `https://65dcd150e7edadead7ecee4f.mockapi.io/crud/${data.id}`,
      data
    );
    const result = res.data;
    return result;
  }
);
///////// Update Data End/////////////////////////////

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    filterPost: (state, action) => {
      switch (action.payload) {
        case "all":
          state.filteredUsers = [...state.users];
          break;

        case "male":
          state.filteredUsers = [...state.users];
          state.filteredUsers = state.filteredUsers.filter(
            (user) => user.gender === "male"
          );
          break;

        case "female":
          state.filteredUsers = [...state.users];
          state.filteredUsers = state.filteredUsers.filter(
            (user) => user.gender === "female"
          );
          break;
        default:
          state.users;
          break;
      }
    },
    searchUser: (state, action) => {
      state.searchInput = action.payload;
      state.isLoading = true;
      const searchParam = state.searchInput.toLowerCase();
      state.filteredUsers = [...state.users];
      state.filteredUsers = state.filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(searchParam)
      );
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    /////Creating Data//////////
    builder.addCase(postData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postData.fulfilled, (state, action) => {
      state.users.push(action.payload);
      state.filteredUsers = state.users;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(postData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    /////Reading Data////////////
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    /////Delete Data///////////////
    builder.addCase(deleteData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteData.fulfilled, (state, action) => {
      const deletedUser = action.payload;
      state.users = state.users.filter((user) => user.id !== deletedUser.id);
      state.filteredUsers = state.users;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(deleteData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    /////Update Data///////////////
    builder.addCase(updateData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateData.fulfilled, (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state.filteredUsers = state.users;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(updateData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { filterPost, searchUser } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
