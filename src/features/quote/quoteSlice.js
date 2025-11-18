import {createSlice} from "@reduxjs/toolkit";
import {fetchQuote} from "../api/quoteAction.js";

const quoteSlice = createSlice({
    name: 'quote',
    initialState: 'Winter is coming...',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchQuote.pending, () => 'Loading...' )
            .addCase(fetchQuote.rejected, () => 'Error loading quote' )
            .addCase(fetchQuote.fulfilled, (state, action) => action.payload)
    }
})

export default quoteSlice.reducer;