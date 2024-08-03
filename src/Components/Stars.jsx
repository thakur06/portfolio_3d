"use client";
import React from "react";
import { ShootingStars } from "./ShootingStars";
import { StarsContainer } from "../Containers/StarContainer";
import { Feedback } from "./Feedback";

export function Stars() {
  return (
    <div className="h-[40rem] rounded-md  flex flex-col items-center justify-center relative w-full">
             <Feedback/>
      <ShootingStars />
      <StarsContainer />
    </div>
  );
}
