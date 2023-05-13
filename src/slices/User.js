import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const registeredUser = createAsyncThunk(
  "users/register",
  async (userData) => {
    const response = await axios.post(`/api/v1/user/register`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  }
);

export const loginUser=createAsyncThunk(
  'user/login',
  async (userData,{rejectWithValue})=>{
    let response;
    try {
   response=await axios.post('/api/v1/user/login',userData,{headers:{ "Content-Type": "application/json"}});
} catch (error) {
  // if(!error){
  //   throw error;
  // }
  console.log("hi")
  console.log(error);
return rejectWithValue(error);    

}
return response;

  }
)



const userSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(registeredUser.fulfilled, (state, action) => {
        console.log(action,"inside full");
        state.loading = false;
        state.message=action.payload.message;

      })
      .addCase(registeredUser.rejected, (state, action) => {
        console.log(action,"inside rej");
        state.loading = false;
        state.message='something went wrong';

        state.error=action.error;

      }).addCase(registeredUser.pending,(state) => {
        
        state.loading = true;

      });
      builder.addCase(loginUser.pending,(state)=>{
        state.loading=false;
      }).addCase(loginUser.fulfilled,(state,action,error)=>{
        state.loading=false;
        console.log(action,error,"inside fulfilled");
      }).addCase(loginUser.rejected,(state,action,error)=>{
        console.log(action,error,"inside failed");
      })
  },
});

export default userSlice.reducer;