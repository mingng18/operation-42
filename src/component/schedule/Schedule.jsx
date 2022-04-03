import React from 'react'
import './schedule.css'
import schedule_download from '../../assets/schedule_download.png'
import schedule from '../../assets/schedule.png'

const Schedule = () => {
  return (
    <section id='schedule'>
        <div className="schedule_container">
          <text className='schedule_heading neumorphism'>Programme Schedule</text>
          <text className='schedule_content'>All events’ time and details are subjected to change unders organisation’s decision.</text>
          <div className="button_container">
            <a href={schedule_download} download className='btn btn-schedule'>Download</a>
          </div>
          <img src= {schedule} alt="Schedule" className="schedule_img" />
        </div>
    </section>
  )
}

export default Schedule