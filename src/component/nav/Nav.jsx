import React from 'react'
import './nav.css'

const nav = () => {
  return (
    <nav className='nav'>
      <div className="nav-container">
        <div className='small-text text'>42 Operation</div>
        <a href="#" className='small-text link'>Workshop</a>
        <a href="#" className='small-text link'> Contact</a>
        <a href="#" className='btn-nav'>Apply Now</a>
      </div>
    </nav>
  )
}

export default nav