import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { oneshield } from '../assets';
import { Icon } from './Icon';
import { experience } from '../Constants';
import { TextGenerator } from '../Containers/TextGenrator';
import {IconAssemblyFilled} from "@tabler/icons-react"
export const Experience = () => {
  return (
    <>
    <div className="text-start" id="Experience">
      <div className='text-start sm:ml-20'>
   <p className='text-2xl md:text-4xl font-extrabold text-orange-600 font-serif'>Experience</p></div>
    <IconAssemblyFilled className='mx-auto hidden xl:block' size={30} color='orange'/>
    </div>
   
    <VerticalTimeline lineColor='#ea580c' >
   {experience.map((data,index)=> ( <VerticalTimelineElement key={index}
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#0C1F5D', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={data.date}
      iconStyle={{ background: 'white', color: '#fff' }}
      icon={<Icon imgSrc={data.logo}/>}
      position='right'
      
    >
      <h1 className=" text-white text-2xl">{data.company}</h1>
      <h3 className="vertical-timeline-element-title">{data.role}</h3>
      <h4 className="vertical-timeline-element-subtitle">{data.location}</h4>
<ul >
  <li className='pt-5'>
  •   Designed and implemented user interfaces using the One Shield Designer tool, enhancing user experience through 
intuitive and interactive elements and layouts.

  </li>
  <li className='pt-5'>
  •   Designed and implemented user interfaces using the One Shield Designer tool, enhancing user experience through 
intuitive and interactive elements and layouts.

  </li>
</ul>
    </VerticalTimelineElement>))}
    </VerticalTimeline>
    </>
  )
}
