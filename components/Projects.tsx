import React, { ReactElement } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { StarIcon } from "@heroicons/react/solid";
import { projectList } from "../typescript/projectList";
import { Button } from "@mui/material";


function Projects(): ReactElement  {
  const getTimeLineElements = () => projectList.map((element, index: number) => (
    <VerticalTimelineElement id="/projects" {...element.props}>
      <div className="flex flex-wrap gap-x-4">
        {element.tools.map((toolNames, index: number) => (<p key={index} className="flex justify-center items-center bg-gray-300 rounded-full p-2.5 text-center">{toolNames}</p>))}
      </div>

      <h3 className="vertical-timeline-element-title font-bold pt-4">{element.title}</h3>
      <h4 className="vertical-timeline-element-subtitle font-bold pb-4">{element.subtitle}</h4>

      <div className="flex space-x-4">
        {element.sourceButtons.sources.map((source, index: number) => (
          <Button className="bg-gradient-to-r from-[rgb(126,232,250)] via-[rgb(127,244,181)] to-[rgb(128,255,114)]" target="_blank" rel="noopener noreferrer" href={source.Link} key={index} variant="outlined" style={{ color: 'rgb(0, 0, 0)', border: '2px solid rgb(0, 0, 0)' }}>
            {source.Title}
          </Button>
        ))}
      </div>
    </VerticalTimelineElement>
  ))

  return (
    <div className="mt-4 p-2 border-b border-black pb-3 snap-start">
      <VerticalTimeline animate={true} className="vertical-timeline--project overflow-x-hidden overflow-y-hidden" layout='2-columns'>
        {getTimeLineElements()}
        {/*<VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="2012 - present"
          contentStyle={{ background: 'rgb(255, 255, 255)', color: 'rgb(47, 216, 29) }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
          iconStyle={{ background: 'rgb(128, 255, 114)' }}
          icon={<CodeIcon className="text-white" />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>*/}
        <VerticalTimelineElement iconStyle={{ background: 'rgb(25, 226, 3)' }} icon={<StarIcon className="text-white" />} />
      </VerticalTimeline>
    </div>

  )
}

export default Projects
