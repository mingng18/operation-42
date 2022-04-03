import React from 'react'
import './header.css'
import WAVE from '../../assets/wave.gif'

const Header = () => {
  return (
    <header>
        <article className='article'>
            <img className="picture" src={WAVE} alt="background" />
            <div className="header">
                <h1 className='font'>42 Operation</h1>
                <h3 className='font 10width'>exposure w orkshop 2022.</h3>
                <div className="button">
                    <a href="#" className='btn btn-primary'>Apply Now</a>    
                </div>
            </div>
        </article>
    </header>
  )
}

export default Header