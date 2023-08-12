import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Icon from './pages/Icon'
import Resume from './pages/Resume'
import Service from './pages/Service'

const App = () => {
  return <>
    <div className="bg-gray-900">
      <Home />
      <Navbar />
      <About />
      <Icon />
      <Service />
      <Resume />
    </div>
  </>
}

export default App