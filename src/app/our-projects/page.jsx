import React from 'react'
import ServiceHeader from '../../components/ServiceHeader/ServiceHeader'
import ProjectCards from '../../components/ProjectPage/ProjectCards'

const OurProject = () => {
  return (
    <div>
            <ServiceHeader
        vid="/Vid/SEOContentWriting.mp4"
        beforeTitle="Our "
        highlight="Project "
        afterTitle=""
        para="A modern and responsive web platform designed to provide users with a seamless, secure, and engaging experience. Built with performance, accessibility, and user satisfaction in mind, our website delivers reliable solutions through an intuitive and visually appealing interface."
      />{" "}
      <ProjectCards/>
    </div>
  )
}

export default OurProject
