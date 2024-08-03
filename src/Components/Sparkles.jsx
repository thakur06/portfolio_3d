import React from "react";
import Sparks from "../Containers/Sparks";
import { Feedback } from "./Feedback";
import { Stars } from "./Stars";


export function Sparkles() {
  return (
    <div className="flex justify-between mb-10">
      {/* <Sparks
        backgroundColor="#0A0A0A"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      > */}

  <Stars/>
      {/* </Sparks> */}
    </div>
  );
}
