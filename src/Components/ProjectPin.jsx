"use client";

import React from "react";
import { CardBody, Pin, CardItem } from "../Containers/Pin";


export function ProjectPin({data}) {
  return (
    <Pin className="inter-var -mt-[8rem] md:-mt-[10rem]">
      <CardBody className="bg-transparent border border-orange-200 relative group/card  dark:hover:shadow-2xl hover:shadow-emerald-500/[0.1] dark:bg-black w-[20rem] sm:w-[22rem] h-[25rem]  rounded-xl p-6 ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         {data.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-300"
        >
         {data.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-2">
          <img
            src={data.imgSrc}
            height="1000"
            width="1000"
            className="h-60 md:w-full object-cover w-auto rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between  items-center mt-3">
      
          <CardItem
               href={data.url}
            translateZ={20}
            as="a"
            target="_blank"
            className="px-4 rounded-3xl border border-orange-200 border-t-transparent sm:border-hidden bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Visit
          </CardItem>
        </div>
      </CardBody>
    </Pin>
  );
}
