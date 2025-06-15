import React, { useEffect } from "react";
import LanguageSelect from "./components/language-select";
import Button from "./components/button";
import TextContainer from "./components/text-container";
import { useDispatch } from "react-redux";
import { getLanguages } from './redux/actions/index';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  return (
    <div className="bg-zinc-800 min-h-screen grid place-items-center text-white">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center py-5">
        <h1 className="text-4xl font-semibold mb-7 text-center">Translator</h1>
        <LanguageSelect />
        <TextContainer />
        <Button />
      </div>
    </div>
  );
};

export default App;
