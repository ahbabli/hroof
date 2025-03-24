import React, { useState } from "react";
import Main from "./Main";

const Name = () => {
  const [inputValue, setInputValue] = useState("");
  const [textName, settextName] = useState("");
  const [hidden, setHidden] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    settextName(inputValue);
    setInputValue(""); // تفريغ الإدخال بعد الإضافة
    setHidden(true);
  };
const playAgain = () => {
  window.location.reload();


};
  return (
    <div className="flex justify-center items-center text-white  lg:mt-14 md:rotate-0  rotate-90">
      {!hidden && (
        <div className="inputSec flex md:mt-44 md:rotate-0 rotate-270 md:translate-x-0 translate-x-62">
          <input
            className="bg-amber-200 text-[#3c2c56] p-1 rounded-lg cursor-pointer"
            type="submit"
            onClick={handleSubmit}
            value="بدء اللعبة"
          />
          <input
            className="text-white  outline-none rtl:text-right"
            dir="rtl"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="أدخل اسمك..."
          />
          <h1 className="ml-2">حروف مع </h1>
        </div>
      )}
      {hidden && (<>
      <div className="flex md:flex-col flex-row-reverse md:space-y-4 ">
        <div className="textSec flex justify-center items-center text-center md:ml-[630px] text-4xl">
          <p className="text-red-400 translate-x-11 translate-y-6">{textName}</p>
          <p className="text-cyan-300 translate-x-11">مع</p>
          <p className="text-amber-100 -translate-y-7">حروف</p>
        </div>
        <Main></Main>
        <div className="absolute top-0 ">
          <button className="bg-amber-200 rounded-lg p-1 text-black cursor-pointer hover:bg-amber-400 duration-300 ease " onClick={playAgain}>إبدأ من جديد</button>
        </div>
        </div>
        </>
      )}
    </div>
  );
};

export default Name;

