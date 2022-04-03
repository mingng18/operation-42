import React from 'react'
import './application.scss'
import IMG1 from '../../assets/application.png'
import IMG2 from '../../assets/orientation.png'
import IMG3 from '../../assets/learn.png'
import IMG4 from '../../assets/activities.png'
import IMG5 from '../../assets/presentation.png'
import HorizontalScroll from 'react-scroll-horizontal'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Application',
    desc: 'Provide us your resume. Let us know ur skills and background. Go through an interview to further gauge ur commintment towards our workshop',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Orientation',
    desc: 'Welcome into the first step of 42 Operation! Greets with your friends together with all the mentors.',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Learn',
    desc: 'Prepare yourself for the battle! All the skills and apps we taught are rather techinical so make sure you already have your breakfast!',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Activites',
    desc: 'Introduce C++, 3D modelling, electrical component',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Arduino',
    desc: 'Introduce C++, 3D modelling, electrical component',
  },
]

const Application = () => {
  return (
    <section id='application'>
      <div className="application_container">
        {
          data.map(({id, image, title, desc}) => {
            
            return (
              <HorizontalScroll>

                <article key={id} className="application_card">
                  <div className="innercard">
                    <h1>HAHA</h1>
                    {/* <div className="application_image">
                      <img className="image" src={image} alt={title} />
                    </div>
                    <div className="word_container">
                      <text className="application_header">{title}</text>
                      <div className="application_content">{desc}</div>
                    </div> */}
                  </div>
                </article>
              </HorizontalScroll>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Application