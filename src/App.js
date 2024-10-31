import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/programs/Programs'
import Titles from './Components/title/Titles'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/Footer'
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Titles subTitle = 'Our PROGRAM' title = 'What We Offer'/>
      <div className='container'>
        <Programs />
        <About />
      <Titles subTitle = 'Gallery' title = 'Campus Photos'/>
      <Campus />
      <Titles subTitle = 'TESTIMONIALS' title = 'What Student Says'/>
      <Testimonials />
      <Titles subTitle = 'Contact Us' title = 'Get in Touch'/>
      <Contact/>
      <Footer />
      </div>
      
    </div>
  )
}

export default App
