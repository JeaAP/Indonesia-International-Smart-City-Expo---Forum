import { useState } from 'react'
import Hero from './components/hero'
import Header from './components/header'
import About from './components/about'
import Theme from './components/theme'
import Gallery from './components/gallery'
import Contact from './components/contact'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Theme />
        <Gallery />
        <Contact />
      </div>
    </>
  )
}

export default App
