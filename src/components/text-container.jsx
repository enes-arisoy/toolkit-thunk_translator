import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/slices/translateSlice";
import Loader from "./loader";

const TextContainer = () => {
  const { isLoading, translatedText, textToTranslate } = useSelector(
    (store) => store.translateReducer
  );
  const dispatch = useDispatch();
  return (
    <div className="flex gap-3 mt-5 md:gap-[105px] max-md:flex-col">
      <div className="flex-1">
        <textarea
        value={textToTranslate}
          className="w-full min-h-[250px] max-h-[500px] text-black text-[20px] rounded p-[10px] bg-zinc-200"
          onChange={(e) => dispatch(setText(e.target.value))}
        ></textarea>
      </div>

      <div className="flex-1 relative">
        <textarea
          value={translatedText.trim()}
          disabled
          className="w-full min-h-[250px] max-h-[500px] text-zinc-300 text-[20px] rounded p-[10px] bg-zinc-700"
        ></textarea>
        {isLoading && <Loader/>}
      </div>
    </div>
  );
};

export default TextContainer;
