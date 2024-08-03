"use client";
import React,{useState} from "react";
import { BackgroundBeams } from "../Containers/Beams";
import { java, robot } from "../assets";
import { Intro } from "./Intro";
import { TypeEffect } from "./TypeEffect";
import { Navbar } from "./Navbar";
export function Beams() {
  return (
    <>



<Navbar/>


    <div className="h-[30rem] md:h-full w-full rounded-md bg-neutral-950 relative flex flex-col  p-2  antialiased">
<div className="grid grid-flow-row grid-cols-4 justify-end">
  <div className="col-span-2 ">
    <TypeEffect/>
</div>
<div className="justify-self-end items-end">
<img src={robot} className="md:mt-20 mt-32"/>
</div>

</div>




      <BackgroundBeams />
    </div>
    
    </>
  );
}
