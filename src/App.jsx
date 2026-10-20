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

const projects = [
  { name: "Spin Cycle", card: <DataPlaylistPortfolioCard key="spin-cycle" /> },
  { name: "Card-o-Matic", card: <GreetingCardGeneratorPortfolioCard key="card-o-matic" /> },
  { name: "Click Lab", card: <ClickLabPortfolioCard key="click-lab" /> },
]


function App() {
  const [shown, setShown] = useState(projects)
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

  const search = () => {
    const text = document.querySelector("#query").value
    setShown(projects.filter((project) =>
      project.name.toLowerCase().includes(text.toLowerCase())
    ))
  }

 return (
  <div className="container">
    <Header />
    <Hero />

    <section>
        <h3><Greeting /></h3>
      <p>Pokémon trainer from Pallet Town.</p>
      <p>Pikachu uses Thunderbolt.</p>
      <p className="shout">It's super effective!</p>
    </section>

    <section className="flex-container">
      <h5><Fortune /></h5>
    </section>

    <section>
      <h5><GitHubLink /></h5>
    </section>

    <section>
      <h3>Here are some of my projects:</h3>
      <input type="text" id="query" placeholder="Search projects" />
      <button onClick={search}>Search</button>
      <div className="flex-container">
        {shown.map((project) => project.card)}
      </div>
      {shown.length === 0 && <p>No projects match that search.</p>}
    </section>

    <section>
      <p>The light is {light}.</p>
      <button onClick={turnOn}>On</button>
      <button onClick={turnOff}>Off</button>
    </section>

    <section>
      <img src={src} alt="basan" />
      <div className="flex-container">
        <button onClick={showColor}>Color</button>
        <button onClick={showBlackAndWhite}>Black and White</button>
        <button onClick={showSomeColor}>Some Color</button>
      </div>
    </section>

    <section>
      <p className={look}>{days[index]}</p>
      <button onClick={previousDay}>Previous</button>
      <button onClick={nextDay}>Next</button>
    </section>

    <Footer />
  </div>
)
}
export default App