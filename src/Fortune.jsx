import { useState } from 'react'

const randomNumber = (min, max) => {
  Math.floor(Math.random() * (max - min + 1)) + min
}

function Fortune() {
  const fortunes = [
    { text: "Ask again later", author: "Anonymous" },
    { text: "Don't go home!", author: "Anonymous" },
    { text: "Today seems unlucky", author: "Anonymous" },
    { text: "You will have a great day!", author: "Anonymous" },
  ]

  const [index, setIndex] = useState(randomNumber(0, fortunes.length - 1))
  
  const newFortune = () => {
    setIndex(randomNumber(0, fortunes.length - 1))
  }

  const { text, author } = fortunes[index]


return (
  <div>
    <p>{text}</p>
    <p><small>{author}</small></p>
    <button onClick={newFortune}>New Fortune</button>
  </div>
)
}

export default Fortune