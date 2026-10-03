import { useState } from 'react' 

import Hero from "./components/Hero.jsx"
import Header from "./components/Header.jsx"
import Contact from "./components/Contact.jsx"
import Greeting from './components/Greeting'
import Intro from './components/Intro'
import GitHubLink from './components/GitHubLink'
import Fortune from './components/Fortune'
import TipSection from './components/TipSection.jsx'
import Footer from './components/Footer'
import DataPlaylistPortfolioCard from './DataPlaylistPortfolioCard.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        <Header />
        <Hero />
        <Greeting />
        <Intro />
        <GitHubLink />
        <Fortune />
        <TipSection />
        <DataPlaylistPortfolioCard />
        <Greeting message="and thanks for stopping by!" showExtras={false} />
        <Footer />
      </div>
    </div>
  )
}

export default App