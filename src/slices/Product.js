import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AddItem=createAsyncThunk(

    'Product/addItem',
    async (productData)=>{
        console.log(productData);
        try {
            const {data}=await axios.post(`api/v1/product/`,productData,
        {withCredentials:true
        });
        console.log(data,'data');
        return data;
        } catch (error) {
            console.log(error,"error");
            return error.response.data;
        }
    }
);



const initialState={
}

const productSlice=createSlice({

    name:"Product",
    initialState,
    // reducer:{

    // },
    extraReducers:(builder)=>{
        builder.addCase(AddItem.fulfilled,(state,action)=>{
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(AddItem.rejected, (state, action) => {
            state.loading = false;
            state.message = "something went wrong";
          })
          .addCase(AddItem.pending, (state) => {
            state.message = "";
            state.loading = true;
          });
    }


});

export default productSlice.reducer;