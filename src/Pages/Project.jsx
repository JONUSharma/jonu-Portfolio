import { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
// import 'react-vertical-timeline-component/style.min.css'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import projects from '../Components/ProjectData'
const Projects = () => {
  
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProjects = projects.slice(0, visibleCount);
  return (
    <div className="relative overflow-hidden bg-black py-20 px-4 ">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-purple-600 opacity-30 blur-3xl z-0"></div>
      <h2 className="text-4xl text-center text-white font-bold mb-16">Latest Works</h2>

      <VerticalTimeline lineColor="#798282">
        {visibleProjects.map((proj, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "rgba(255,255,255,0.1)",
              color: "gray",
              borderRadius: "16px",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "2px solid rgba(255,255,255,0.2)",
              boxShadow: "0 0 6px white"
            }}
            contentArrowStyle={{ borderRight: '15px solid #614682' }}
            icon={
              <img src={proj.logo} alt={proj.title} className="rounded-full wave-bg cursor-pointer w-full h-full object-cover p-1" />
            }
          >
            {/* Laptop frame */}
            <div className="relative cursor-pointer w-full  mx-auto mb-6 p-4 rounded-lg hover:scale-110 transition ease-in-out ">
              <a href={proj.siteUrl} target='_blank'>
                <img src={proj.laptopImg} alt="Laptop" className="w-full " />
                <img
                  src={proj.logo}
                  alt={proj.title}
                  className="absolute top-[9.2%] left-[14.7%] w-[70%] h-[75%] object-cover rounded "
                /></a>
            </div>

            {/* Title & Desc */}
            <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{proj.detail}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.badge.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">#{tag}</span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={proj.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-cyan-500/75 text-white rounded hover:bg-gradient-to-r  from-purple-300/75 to-cyan-500/15 text-sm"
              >
                <FaExternalLinkAlt /> Live
              </a>
              <a
                href={proj.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 text-sm"
              >
                <FaGithub /> Code
              </a>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <div className='flex items-center justify-center mt-10 p-5'>
      {visibleCount < projects.length ? (
        <button className='z-10 rounded-lg items-center p-4 font-semibold text-2xl text-white bg-gradient-to-r from-pink-600 to bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:scale-95' onClick={() => setVisibleCount(prev => prev + 3)}>
          View more
        </button>
      ) : visibleCount > 3 ? (
        <button className=' rounded-lg items-center p-4 font-semibold text-2xl text-white bg-pink-600 hover:bg-white hover:text-pink-600' onClick={() => setVisibleCount(3)}>
          View less
        </button>
      ) : null}
      </div>
    </div>
  )
}

export default Projects
