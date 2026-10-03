import Hero from "./Hero.jsx"
import Header from "./Header.jsx"
import Contact from "./Contact.jsx"
import Greeting from "./components/Greeting.jsx"


function App2() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-8">
      <Greeting />
      <Greeting />
    </div>
  )
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


function Fortune() {
  let fortunes = ["Ship it.", "Read the error.", "Commit early."]
  let index = randomNumber(0, fortunes.length - 1)
  return <p>{fortunes[index]}</p>
}

function Footer() {
  let year = new Date().getFullYear()
  return <p>&copy; {year} Danielle ER</p>
}

function GitHubLink() {
  let url = "https://github.com/FrankCastle-Arch"
  let label = "My GitHub"
  return <a href={url}>{label}</a>
}



function App() {
  return (
    <div>
      <Header />
      <p>Pokémon trainer from Pallet Town.</p>
      <GitHubLink />
      <Fortune />
      <Footer />
    </div>
  )
}



function App1() {
  return (
    <div>
      <h1>Trainer Tip of the Day</h1>
      <Tip />
    </div>
  )
}

export default App
