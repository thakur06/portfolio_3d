"use client";
import React from "react";
import { SkillContainer } from "../Containers/SkillContainer";

import { java } from "../assets";

export function Skills({imgSrc}) {
  return (
    <div >
      <SkillContainer className="rounded-full  p-4 w-16 md:w-20 bg-white dark:bg-zinc-900">
        <img
          src={imgSrc}
          alt="jordans"
          height="1000"
          width="1000"
          className="object-contain"
        />
    
      </SkillContainer>
    </div>
  );
}
