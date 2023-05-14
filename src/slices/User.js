import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const registeredUser = createAsyncThunk(
  "users/register",
  async (userData) => {
    try {
      const {data} = await axios.post(`/api/v1/user/register`, userData, {
        headers: { "Content-Type": "application/json" },
      });
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const loginUser=createAsyncThunk(
  'user/login',
  async (userData)=>{
try {
  const {data}=await axios.post('/api/v1/user/login',userData,{headers:{ "Content-Type": "application/json"}});
  console.log(data,"data");
  return data;
} catch (error) {
  console.log(error,"error");
  
  return error.response.data;

}
  }
)



const userSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(registeredUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message=action.payload.message;
      })
      .addCase(registeredUser.rejected, (state, action) => {
        state.loading = false;
        state.message="something went wrong";
      }).addCase(registeredUser.pending,(state) => {
        state.message="";
        state.loading = true;
      });


      // login logic
      builder.addCase(loginUser.pending,(state)=>{
        state.loading=true;
        state.message="";
        state.isAuthectiacted=false;
      }).addCase(loginUser.fulfilled,(state,action)=>{
        console.log(action)
        state.loading = false;
        state.message=action.payload.message;
        state.isAuthectiacted=action.payload.success?true:false;
      }).addCase(loginUser.rejected,(state)=>{
        state.loading = false;
        state.isAuthectiacted=false;
        state.message="something went wrong";
      });
  },
});

export default userSlice.reducer;