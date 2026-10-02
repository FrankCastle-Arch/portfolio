import imageUrl from './image-url.js'
import './hero.css'

function Hero() {
  const src = imageUrl(1200, 500)
  return (
    <div className="hero">
      <img src={src} alt="campbells soup can" />
    </div>
  )
}

export default Hero
