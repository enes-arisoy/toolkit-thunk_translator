import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { translatedText } from "../redux/actions";

const Button = () => {
  const {textToTranslate} = useSelector((store) => store.translateReducer)
  const dispatch = useDispatch();
  return (
    <button 
    disabled={textToTranslate.trim()===""}
    onClick={()=> dispatch(translatedText())} className="bg-zinc-700 text-center px-5 py-3 rounded-md font-semibold hover:ring-2 hover:bg-zinc-800 transition mt-3 cursor-pointer disabled:brightness-40">
      Translate
    </button>
  );
};

export default Button;
