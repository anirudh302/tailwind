import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Icon from './pages/Icon'
import Resume from './pages/Resume'
import Service from './pages/Service'
import ImagesInfo from './pages/ImagesInfo'
import Customer from './pages/Customer'
import Footer from './pages/Footer'

const App = () => {
  return <>
    <div className="bg-gray-900">
      <Home />
      <Navbar />
      <About />
      <Icon />
      <Service />
      <Resume />
      <ImagesInfo />/
      <Customer />
      <Footer />
    </div>
  </>
}

export default App