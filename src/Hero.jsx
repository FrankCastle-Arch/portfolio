import { useState } from 'react'
import heroPhoto from './heroPhoto.js'
import './hero.css'
import PhotoControls from './PhotoControls.jsx'



  const photos = [
    { id: "photo-1672671187899-a10f547341f1", description: "basan" },
    { id: "photo-1723707959328-4106c2a3854d", description: "train" },
    { id: "photo-1596785236251-71fa49ac5760", description: "city streets" },
  ]

  const resetHero = () => {
    setIndex(0)
    setSat(0)
  }


function Hero() {
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
    setSepia(0)
  }

  const { id, description } = photos[index]
  const caption = `Photo ${index + 1} of ${photos.length}: ${description}`
  const [src, alt] = heroPhoto({ photo: id, width: 1000, height: 1000, sat, sepia, description })
  
  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
      </div>
      <p>{caption}</p>
      <p>
        <PhotoControls
          onNext={nextPhoto}
          onPrevious={previousPhoto}
          onColor={showColor}
          onBlackAndWhite={showBlackAndWhite}
          onReset={resetHero}
        />
      
      </p>
    </div>
  )
}

export default Hero
