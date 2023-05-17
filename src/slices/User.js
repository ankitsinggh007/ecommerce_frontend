import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

export const registeredUser = createAsyncThunk(
  "users/register",
  async (userData) => {
    try {
      const { data } = await axios.post(`/api/v1/user/register`, userData, {
        withCredentials:true
      });
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const loginUser = createAsyncThunk("user/login", async (userData) => {
  try {
    const {data} = await axios.post("/api/v1/user/login", userData,{
      withCredentials:true
    });
    return data;
  } catch (error) {
    console.log(error, "error");

    return error.response.data;
  }
});

export const updateUser = createAsyncThunk("user/update", async (userData) => {
  try {
    const { data } = await axios.put("/api/v1/user/update_profile", userData, {
      withCredentials:true
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(registeredUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(registeredUser.rejected, (state, action) => {
        state.loading = false;
        state.message = "something went wrong";
      })
      .addCase(registeredUser.pending, (state) => {
        state.message = "";
        state.loading = true;
      });

    // login logic
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.message = "";
        state.isAuthectiacted = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action,"LoginUser");
        state.loading = false;
        state.message = action.payload.message;
        state.user = action.payload.response;
        state.isAuthectiacted = action.payload.success ? true : false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.isAuthectiacted = false;
        state.message = "something went wrong";
      });
    // update User
    builder
    .addCase(updateUser.pending,(state)=>{
      state.loading = true;
      state.message = '';
    })
    .addCase(updateUser.fulfilled,(state,action)=>{
      console.log(action,"updateUser");

      state.loading = false;
      state.message = action.payload.message;
      state.user = action.payload.data;
        
    })
    .addCase(updateUser.rejected, (state) => {
      state.loading = false;
      state.isAuthectiacted = false;
      state.message = "something went wrong";
    });
  },
});

export default userSlice.reducer;
