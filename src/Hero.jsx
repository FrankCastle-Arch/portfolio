import { useState } from 'react'
import heroPhoto from './heroPhoto.js'
import './hero.css'


function Hero() {
  const photos = [
    { id: "photo-1672671187899-a10f547341f1", description: "basan" },
    { id: "photo-1723707959328-4106c2a3854d", description: "train" },
    { id: "photo-1596785236251-71fa49ac5760", description: "city streets" },
  ]
  const [index, setIndex] = useState(0)
  const [sat, setSat] = useState(0)
  const [sepia, setSepia] = useState(0)


  const nextPhoto = () => {
    if (index === photos.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const previousPhoto = () => {
    if (index === 0) {
      setIndex(photos.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const showColor = () => {
    setSat(0)
  }

  const showBlackAndWhite = () => {
    setSat(-100)
  }
    const addSepia = () => {
    setSepia(80)
  }

  const removeSepia = () => {
    setSepia(0)
  }

    const showFirst = () => {
    setIndex(0)
  }

  const showSecond = () => {
    setIndex(1)
  }

  const showThird = () => {
    setIndex(2)
  }

  const resetHero = () => {
    setIndex(0)
    setSat(0)
  }

  const { id, description } = photos[index]
  const [src, alt] = heroPhoto({ photo: photos[index], width: 1200, height: 500, sat, description: descriptions[index], })
  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
      </div>
      <p>
        <button onClick={previousPhoto}>Previous</button>
        <button onClick={nextPhoto}>Next</button>
        <button onClick={showColor}>Color</button>
        <button onClick={showBlackAndWhite}>Black and White</button>
        <button onClick={addSepia}>Sepia</button>
        <button onClick={removeSepia}>No Sepia</button>
        <button onClick={showFirst}>First</button>
        <button onClick={showSecond}>Second</button>
        <button onClick={showThird}>Third</button>
        <button onClick={resetHero}>Reset</button>
      </p>
    </div>
  )
}

export default Hero
