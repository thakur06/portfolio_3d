import React from 'react'
import { Skills } from '../Components/Skills';
import { skills } from '../Constants';
export const Skill = () => {
    const arr=['skill', 'time', 'history','story','skill', 'time', 'history','story'];
  return (
<>
<div className='text-start sm:ml-20'>
<p className='text-2xl md:text-4xl font-extrabold text-orange-600 font-serif' id="Skills">Skills</p>
</div>
<div className='flex justify-center grid-rows-3 pt-10  gap-7 flex-wrap ' >
{
skills.map((data,index)=>(
    <Skills key={index} imgSrc={data}/>
))
}
   </div></>
  )
}
