import React from 'react'
import './path.css'
import Valley from '../../assets/valley.png'

const Path = () => {
  return (
    <section id='path'>
      <div className="path_container">
        <img className="picture" src={Valley} alt="background" />
        <div className="text_container">
          <text className='path neumorphism'>paths.</text>
          <text className='field'>Over 4 fields to be chosen</text>
        </div>
      </div>
    </section>
  )
}

export default Path