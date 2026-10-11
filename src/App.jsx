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






//const imageUrl = (width, height, sat) =>
  //"https://images.unsplash.com/photo-1789948731559-5d113d8744b6?w=" + width + "&h=" + height + "&fit=crop&auto=format&sat=" + sat



//function App() {
  //const [count, setCount] = useState(0)

//  const addOne = () => {
//     setCount(count + 1)  
  //}
//
  //  const subtractOne = () => {
    //  setCount(count - 1)
  //}

//    const reset = () => {
  //    setCount(0)
  //}

  //}
  //return (
    //<div>
      //<p>Count: {count}</p>
      //<button onClick={addOne}>Add One</button>
      //<button onClick={subtractOne}>Subtract One</button>
      //<button onClick={reset}>Reset</button>
    //</div>
   // )    
//}     





export default App