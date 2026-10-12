import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Fortune from './Fortune.jsx'
import Tip from './Tip.jsx'
import Hero from './Hero.jsx'
import GitHubLink from './GitHubLink.jsx'
import DataPlaylistPortfolioCard from './DataPlaylistPortfolioCard.jsx'
import GreetingCardGeneratorPortfolioCard from './GreetingCardGeneratorPortfolioCard.jsx'
import './flex-container.css'

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <p>Pokémon trainer from Pallet Town.</p>
      <p>Pikachu uses Thunderbolt.</p>
      <p className="shout">It's super effective!</p>
       <Fortune />
       <DataPlaylistPortfolioCard />
      <Footer />
    </div>
  )
}

function App() {
  const [light, setLight] = useState("off")

  const turnOn = () => {
    setLight("on")
  }

  const turnOff = () => {
    setLight("off")
  }

  return (
    <div>
      <p>The light is {light}.</p>
      <button onClick={turnOn}>On</button>
      <button onClick={turnOff}>Off</button>
    </div>
  )
}

const imageUrl = (width, height, sat) =>
  "https://images.unsplash.com/photo-1672671187899-a10f547341f1" + width + "&h=" + height + "&fit=crop&auto=format&sat=" + sat

function App() {
  const [sat, setSat] = useState(0)

  const showColor = () => {
    setSat(0)
  }

  const showBlackAndWhite = () => {
    setSat(-100)
  }

    const showSomeColor = () => {
    setSat(-50)
  }

  const src = imageUrl(600, 250, sat)
  return (
    <div>
      <img src={src} alt="Flowers in a clay vase" />
      <button onClick={showColor}>Color</button>
      <button onClick={showBlackAndWhite}>Black and White</button>
      <button onClick={showSomeColor}>Some Color</button>    
    </div>
  )
}





export default App