import { useState } from 'react'

const randomNumber = (min, max) => {
  Math.floor(Math.random() * (max - min + 1)) + min
}

function Fortune() {
  const fortunes = [
    'Ask again later',
    "Don't go home!",
    'Today seems unlucky'
  ]

  const [index, setIndex] = useState(randomNumber(0, fortunes.length - 1))
  
  const newFortune = () => {
    setIndex(randomNumber(0, fortunes.length - 1))
  }

return (
  <div>
    <p>{fortunes[index]}</p>
    <button onClick={newFortune}>New Fortune</button>
  </div>
)
}

export default Fortune