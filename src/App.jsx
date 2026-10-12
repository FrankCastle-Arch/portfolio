import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Fortune from './Fortune.jsx'
import Greeting from './Greeting.jsx'
import Hero from './Hero.jsx'
import GitHubLink from './GitHubLink.jsx'
import DataPlaylistPortfolioCard from './DataPlaylistPortfolioCard.jsx'
import GreetingCardGeneratorPortfolioCard from './GreetingCardGeneratorPortfolioCard.jsx'
import ClickLabPortfolioCard from './ClickLabPortfolioCard.jsx'
import './flex-container.css'

function Greeting1() {
  return <h2>Hello! I'm Danielle</h2>
}

function App() {
  const [light, setLight] = useState('off')
  const [sat, setSat] = useState(0)
  const days = ['Monday', 'Tuesday', 'Wednesday', "Thursday", "Friday", "Saturday", "Sunday"]
  const [index, setIndex] = useState(0)

  const turnOn = () => setLight('on')
  const turnOff = () => setLight('off')

  const showColor = () => setSat(0)
  const showBlackAndWhite = () => setSat(-100)
  const showSomeColor = () => setSat(-50)

  function nextDay() {
    if (index === days.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  function previousDay() {
    if (index === 0) {
      setIndex(days.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const imageUrl = (width, height, satValue) =>
    `https://images.unsplash.com/photo-1672671187899-a10f547341f1?auto=format&fit=crop&w=${width}&h=${height}&sat=${satValue}`

  const src = imageUrl(600, 250, sat)
  let look = ''

  if (index === days.length - 1) {
    look = 'last'
  }

  return (
    <div className="container">
      <Header />
      <Hero />
       <br></br>
      <h2><Greeting /></h2>
      <br></br>
      <br></br>
      <p>Pokémon trainer from Pallet Town.</p>
      <p>Pikachu uses Thunderbolt.</p>
      <p className="shout">It's super effective!</p>
       <br></br>
      <br></br>
      <div className="flex-container">
      <h6><Fortune /></h6>
      </div>
      <br></br>
      
      <h3><GitHubLink /></h3>
      
      <br></br>
      <br></br>
    
      <h3>Here are some of my projects:</h3>
      <div className="flex-container">
        <DataPlaylistPortfolioCard />
        <GreetingCardGeneratorPortfolioCard />
        <ClickLabPortfolioCard />
      </div>
      <br></br>
      <div>
        <p>The light is {light}.</p>
        <button onClick={turnOn}>On</button>
        <button onClick={turnOff}>Off</button>
      </div>
<br></br>
<br></br>
      <img src={src} alt="basan" />
      <br></br> 
      <br></br> 
      <div className="flex-container">
        <button onClick={showColor}>Color</button>
        <button onClick={showBlackAndWhite}>Black and White</button>
        <button onClick={showSomeColor}>Some Color</button>
      </div>
      <br></br>
      <br></br>
      <div>
        <p className={look}>{days[index]}</p>
        <button onClick={previousDay}>Previous</button>
        <button onClick={nextDay}>Next</button>
      </div>
      <Footer />
    </div>
  )
}

export default App