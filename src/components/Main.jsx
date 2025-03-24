import React from "react";
import { useState } from "react";

const Main = () => {
   // قائمة الألوان بالتسلسل
   const colors = ["white", "yellow", "green", "orange"];

   // الحروف العربية بشكل عشوائي
   const arabicLetters = [
    "ح", "ض", "ق", "غ", "م", "ت", "ظ", "ل", "س", "أ",
    "ز", "ع", "ك", "ش", "ب", "ه", "د", "و", "ص", "ط",
    "خ", "ن", "ر", "ف", "ي"
   ];
 
   // حالة لتخزين اللون لكل شكل
   const [hexagonColors, setHexagonColors] = useState({});
 
   // تحديث اللون عند الضغط
   const handleHexagonClick = (index) => {
     setHexagonColors((prev) => ({
       ...prev,
       [index]: (prev[index] + 1) % colors.length || 1,
     }));
   };
 
   // تقسيم الأشكال إلى صفوف
   const rows = [
     arabicLetters.slice(0, 5),  // الصف الأول: 5 أشكال
     arabicLetters.slice(5, 10), // الصف الثاني: 5 أشكال
     arabicLetters.slice(10, 15), // الصف الثالث: 5 أشكال
     arabicLetters.slice(15, 20), // الصف الثالث: 5 أشكال
     arabicLetters.slice(20, 25) // الصف الثالث: 5 أشكال
   ];
 
   return (
     <div className="flex flex-col items-center justify-center">
       {rows.map((row, rowIndex) => (
         <div
           key={rowIndex}
           className={`flex  ${
             rowIndex === 0 ? "md:ml-0 md:-mb-9" : rowIndex === 1 ? "md:ml-40 md:-mb-9" :  rowIndex === 2 ? " md:ml-0  md:-mb-9" : rowIndex === 3 ? 'md:ml-40 md:-mb-9' : 'md:ml-0'
           }`}
         >
           {row.map((letter, i) => {
             const index = rowIndex * 5 + i; // تحديد فريد لكل شكل
             return (
               <div
                 key={index}
                 onClick={() => handleHexagonClick(index)}
                 className="relative"
               >
                 {/* الشكل السداسي */}
                 <div
                   className="md:w-40 md:h-40 w-20 h-20 ml-1 cursor-pointer"
                   style={{
                     clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                     backgroundColor: colors[hexagonColors[index] || 0],
                     transition: "background-color 0.3s ease",
                   }}
                 ></div>
 
                 {/* عرض الحرف إذا كانت الخلفية بيضاء */}
                 {(hexagonColors[index] || 0) <= 1 && (
                   <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-black z-10 cursor-pointer">
                     {letter}
                   </span>
                 )}
               </div>
             );
           })}
         </div>
       ))}
     </div>
  );
};

export default Main;
