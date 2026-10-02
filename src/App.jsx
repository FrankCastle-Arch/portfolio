import Hero from "./Hero.jsx"
import Header from "./Header.jsx"


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

function Footer() {
  let year = new Date().getFullYear()
  return <p>&copy; {year} Danielle ER</p>
}


function App() {
  return (
    <div>
      <h1>Trainer Tip of the Day</h1>
      <Tip />
    </div>
  )
}

export default App
