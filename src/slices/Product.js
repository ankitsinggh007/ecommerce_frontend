import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AddItem=createAsyncThunk(

    'Product/addItem',
    async (productData)=>{
        try {
            const {data}=await axios.post(`api/v1/product/`,productData,
        {withCredentials:true
        });
        return data;
        } catch (error) {
            return error.response.data;
        }
    }
);

export const findProduct=createAsyncThunk(
    'Product/findItem',
    async (Pid)=>{
        try {
            const {data}=await axios.get(`api/v1/product/${Pid}`,
        {withCredentials:true
        });
        return data;
        } catch (error) {
            return error.response.data;
        }

    }
)

export const fetchAllProduct=createAsyncThunk(
    'Product/fetchAllProduct',
    
    async ()=>{
        try {
            const {data}=await axios.get(`api/v1/product`,
        );
        return data;
        } catch (error) {
            return error.response.data;
        }
    }
)



const initialState={
    fetchedProduct:{}
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


          builder.addCase(findProduct.fulfilled,(state,action)=>{
            state.fetchedProduct.loading = false;
            state.fetchedProduct.message = action.payload.message;
            state.fetchedProduct.productDetails = action.payload.response;
        })
        .addCase(findProduct.rejected, (state, action) => {
            state.fetchedProduct.loading = false;
            state.fetchedProduct.message = "something went wrong";
          })
          .addCase(findProduct.pending, (state) => {
            state.fetchedProduct.message = "";
            state.fetchedProduct.loading = true;
          });  
        //   fetchAll product
        builder.addCase(fetchAllProduct.fulfilled,(state,action)=>{
            state.fetchedProduct.allProduct = action.payload.response;
            state.fetchedProduct.loading = false;
            state.fetchedProduct.message = action.payload.message;
        })
        .addCase(fetchAllProduct.rejected, (state, action) => {
            state.fetchedProduct.loading = false;
            state.fetchedProduct.message = "something went wrong";
          })
          .addCase(fetchAllProduct.pending, (state) => {
            state.fetchedProduct.message = "";
            state.fetchedProduct.loading = true;
          });
    }


});

export default productSlice.reducer;