"use client";
import { TypeWriter } from "../Containers/TypeWriter";
import { resume } from "../Constants";
export function TypeEffect() {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "Abhishek.",
      className: "text-orange-600 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-32 h-[40rem] relative z-10 sm:mt-48">

      <TypeWriter words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        A Frontend Developer
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 pt-4">
 
        <button className="inline-flex h-12 w-20 sm:w-28 text-xs animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" type={"button"} >
        <a href={resume} download="Abhishek_resume.pdf" > Download CV</a>
        </button>
  

        
      
      </div>
    </div>
  );
}
