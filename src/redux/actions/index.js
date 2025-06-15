import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../utils/api.js";

// asenkron aksiyon
export const getLanguages = createAsyncThunk(
  "language/getLanguages",
  async () => {
    // api isteği at
    const res = await api.get("/languages");

    // aksiyonun payloadı olacak değeri return et
    return res.data.languages;
  }
);

// asenkron aksiyon
export const translatedText = createAsyncThunk(
  "translate/translatedText",
  async (_, { getState }) => {
    // getState: aksiyon içerisinden storedaki verilere eriş
    const {translateReducer} = getState();
    // api isteği at
    const res = await api.post("", {
      q: translateReducer.textToTranslate,
      source: translateReducer.sourceLang.value,
      target: translateReducer.targetLang.value,
    });
    

    // aksiyonun payloadı olacak değeri return et
    return res.data.data.translations.translatedText[0];
  }
);
