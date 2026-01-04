import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: false,
  hotelData: [],
};

export const fetchingHotelData = createAsyncThunk("hotelData", async () => {
  const request = await fetch(
    "https://raw.githubusercontent.com/AhmedKhalilFED/Reykjav-k-Hotel-API-Data/refs/heads/main/hotelData.json"
  );
  return await request.json();
});

export const jsonDB = createSlice({
  name: "Leifur-Eiriksson-Hotel-Data",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchingHotelData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchingHotelData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    builder.addCase(fetchingHotelData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.hotelData = action.payload;
    });
  },
});

export default jsonDB.reducer;
