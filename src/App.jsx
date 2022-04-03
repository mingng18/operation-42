import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Path from './component/path/Path'
import PathDetails from './component/pathDetails/PathDetails'
import MarketTarget from './component/marketTarget/MarketTarget'
import Schedule from './component/schedule/Schedule'
import Application from './component/application/Application'
import Faq from './component/faq/Faq'
import Contact from './component/contact/Contact'
import Teams from './component/teams/Teams'


const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Path />
      <PathDetails />
      <MarketTarget />
      <Schedule />
      <Application />
      <Faq />
      <Contact />
      <Teams />
    </>
  )
}

export default App