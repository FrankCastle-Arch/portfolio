import { useState } from 'react'

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
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
    <article>
      <div>
        <p>{fortunes[index]}</p>
        <button onClick={newFortune}>Try Again!</button>
      </div>
    </article>
  )
}

export default Fortune