import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "./../actions/index";

const initialState = {
  isLoading: true,
  error: null,
  languages: [],
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {},

  // asenkron thunk aksiyonunun pending rejected ve fulfilled anlarında state'in nasıl güncelleneceğini extraReducer ile belirleyebiliriz.
  extraReducers: (builder) => {
    builder.addCase(getLanguages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLanguages.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.languages = action.payload;
    });
  },
});

export default languageSlice.reducer;
