import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { setSource, setTarget, swap } from "../redux/slices/translateSlice";

const LanguageSelect = () => {
  const { isLoading, languages } = useSelector(
    (store) => store.languageReducer
  );
  const { sourceLang, targetLang } = useSelector(
    (store) => store.translateReducer
  );

  const dispatch = useDispatch();

  // api den gelen dizinin formatını değiştir
  // nesnelerdeki language değerlerini value'ya, name değerlerini label'a çevir
  const formatted = languages?.map((item) => ({
    value: item.language,
    label: item.name,
  }));

  // dili algıla seçeneği
  const detect = { value: undefined, label: "Detect Language..." };

  return (
    <div className="flex gap-2">
      <Select
        value={sourceLang}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={[detect, ...formatted]}
        className="flex-1 text-black"
        onChange={(lang) => {
          if (lang.value === targetLang.value) {
            dispatch(swap());
          }
          dispatch(setSource(lang));
        }}
      />

      <button
        className="bg-zinc-600 py-2 px-6 hover:bg-zinc-700 transition rounded text-white cursor-pointer disabled:opacity-50"
        onClick={() => dispatch(swap())}
      >
        Swap
      </button>

      <Select
        value={targetLang}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={formatted}
        className="flex-1 text-black"
        onChange={(lang) => {
          if (lang.value === sourceLang.value) {
            dispatch(swap());
          }
          dispatch(setTarget(lang));
        }}
      />
    </div>
  );
};

export default LanguageSelect;
