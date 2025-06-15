import { createSlice } from "@reduxjs/toolkit";
import { translatedText } from "../actions";

const initialState = {
  isLoading: false,
  sourceLang: { value: undefined, label: "Detect Language..." }, // kaynak dil
  targetLang: { value: "en", label: "English" }, // hedef dil
  textToTranslate: "",
  translatedText: "",
};

const translateSlice = createSlice({
  name: "translate",
  initialState,

  // senkron aksiyonlar
  reducers: {
    setSource: (state, action) => {
      state.sourceLang = action.payload;
    },
    setTarget: (state, action) => {
      state.targetLang = action.payload;
    },
    setText: (state, action) => {
      state.textToTranslate = action.payload;
    },

    swap: (state) => {
      const currentSource = state.sourceLang;
      const currentTarget = state.targetLang;
      const currentText = state.textToTranslate;
      const currentTransText = state.translatedText;

      state.sourceLang = currentTarget;
      state.targetLang = currentSource;

      state.textToTranslate = currentTransText;
      state.translatedText = currentText;
    },
  },

  // asenkron aksiyonları buradan yönetiriz
  extraReducers: (builder) => {
    builder.addCase(translatedText.pending, (state) => {
      state.isLoading = true;
      state.translatedText = "";
    });
    builder.addCase(translatedText.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(translatedText.fulfilled, (state, action) => {
      (state.isLoading = false), (state.translatedText = action.payload);
    });
  },
});

export const { setSource, setTarget, setText, swap } = translateSlice.actions;
export default translateSlice.reducer;
