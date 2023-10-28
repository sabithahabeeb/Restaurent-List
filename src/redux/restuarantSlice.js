import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call -createAsyncThunk
export const fetchResturents = createAsyncThunk('restuarantList/fetchResturents',()=>
{
    // api call
   return axios.get('/restaurants.json').then(response=>response.data.restaurants)

})

const restuarantSlice = createSlice({
    name:'restuarantList',
    initialState:{
        loading:false,
        allRestaurants:[],
        error:''
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchResturents.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchResturents.fulfilled,(state,action)=>{
            state.loading = false
            state.allRestaurants = action.payload
            state.error = ""
        })
        builder.addCase(fetchResturents.rejected,(state,action)=>{
            state.loading=false
            state.allRestaurants = []
            state.error=action.error.message
        })
    }
})

export default restuarantSlice.reducer