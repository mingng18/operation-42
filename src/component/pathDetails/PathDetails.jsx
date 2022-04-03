import React from 'react'
import './pathDetails.css'
import IMG1 from '../../assets/graphic_design.png'
import IMG2 from '../../assets/python_logo.png'
import IMG3 from '../../assets/website.png'
import IMG4 from '../../assets/arduino_logo.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Graphic Design',
    desc: 'Introduce the basics of PowerPoint, Illustrator, Blender',
    outcome: 'PowerPoint Presentation, Apps UI',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Python',
    desc: 'Interduce Pygame, Sockets',
    outcome: 'Multiplayer game',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Website',
    desc: 'Introduce the basics of HTML, CSS, JavaScript and Flask',
    outcome: 'Hackathon Website',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Arduino',
    desc: 'Introduce C++, 3D modelling, electrical component',
    outcome: 'Arduino Project',
  },
]


const PathDetails = () => {
  return (
    <section id='pathDetails' className='path_section'>
      <div className="background">
        <div className="container pathDetails_container">
        {
          data.map(({id, image, title, desc, outcome}) => {
            return (
              <article key={id} className='pathDetails_item'>
                <div className="pathDetails_item-image">
                  <div className="inner_box">
                    <img className="image" src={image} alt={title} />
                  </div>
                </div>
                <div className="text_direction">
                  <text className='pathDetails_text pathDetails_item-heading'>{title}</text>
                  <text className='pathDetails_text pathDetails_item-desc'>{desc}</text>
                  <text className='pathDetails_text pathDetails_item-outcome-heading'>Outcome:</text>
                  <text className='pathDetails_text pathDetails_item-outcome '>{outcome}</text>
                </div>
              </article>
            )
          })
        }
        </div>
      </div>
      
    </section>
  )
}

export default PathDetails