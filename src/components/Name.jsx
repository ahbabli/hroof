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
    <div className="flex justify-center items-center text-white lg:mt-14  ">
      {!hidden && (
        <div className="inputSec flex mt-44">
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
      <div className="flex flex-col space-y-4 w-fit ">
        <div className="textSec flex ml-[630px] text-4xl">
          <p className="text-red-400 translate-x-11 translate-y-6">{textName}</p>
          <p className="text-cyan-300 translate-x-11">مع</p>
          <p className="text-amber-100 -translate-y-7">حروف</p>
        </div>
        <Main></Main>
        <div className="">
          <button className="bg-amber-200 rounded-lg p-1 text-black cursor-pointer hover:bg-amber-400 duration-300 ease " onClick={playAgain}>إبدأ من جديد</button>
        </div>
        </div>
        </>
      )}
    </div>
  );
};

export default Name;
