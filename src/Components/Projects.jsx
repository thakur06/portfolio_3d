import React from "react";
import { ProjectsContainer, Icon } from "../Containers/ProjectsContainer";
import { ShopVilla } from "../assets";
import { project } from "../Constants";
import TextGen from "./TextGen";
import { ProjectPin } from "./ProjectPin";

export function Projects({imgSrc,desc,stack,url,deployed,name}) {
  return (
<>
<div className='text-start sm:ml-20 pt-10'>
<p className='text-2xl md:text-4xl font-extrabold text-orange-600 font-serif' id="Projects">Projects</p>
</div>
<div className="w-[100%] text-center sm:w-[40%] sm:text-start  sm:ml-20 " >
<TextGen words={"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."}/>

</div>
    <div className="flex flex-wrap justify-center mt-20 sm:mt-32 mb-9 md:gap-11 ">
   { project.map((data,index)=>(<ProjectPin key={index} data={data}/>))}
  </div></>
  );
}
