import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id='about' className='sec'>
      <div className="container aboutUs_container">
        <div className="about">
          <text className="about_text neumorphism top">Abo</text>
          <text className="about_text neumorphism bottom">ut</text>
          <text className="btm-text forty-two neumorphism">42</text>
          <text className="btm-text operation">Operation</text>
          <div className="rectPadding">
            {/* <div className="btm-text rect"></div> */}
          </div>
        </div>
        <div className="about_details">
          <div className="detail_cards">
            <div className="outer_box">
              <article className="detail_card">
                <text className='heading_text five'>5</text>
                <text className='detail_text'>days</text>
              </article>
            </div>
            <div className="outer_box">
              <article className="detail_card">
                <text className='heading_text nine'>9</text>
                <text className='detail_text'>hours</text>
              </article>
            </div>
          </div>
          <div className="desc_container">
            <text className=' detail_text description'>of intensive exposure, workshop and practical </text>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About