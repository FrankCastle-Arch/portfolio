import { useState } from 'react' 

import Hero from "./components/Hero.jsx"
import Header from "./components/Header.jsx"
import Contact from "./components/Contact.jsx"
import Greeting from './components/Greeting.jsx'
import Intro from './components/Intro.jsx'
import GitHubLink from './components/GitHubLink.jsx'
import Fortune from './components/Fortune.jsx'
import TipSection from './components/TipSection.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/Projects.jsx'
import Navbar from './components/Navbar.jsx'


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10 flex flex-col gap-8">

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <Navbar /> 
            <Header />
            <Intro />
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <Hero />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <Greeting />
        <div className="flex justify-center">
          <GitHubLink />
        </div>
          <Projects />
          <Fortune />
          <TipSection />
          <Contact />
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default App