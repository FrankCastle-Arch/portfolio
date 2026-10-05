import imageUrl from '../image-url.js'
import './hero.css'

function Hero() {
  const src = imageUrl(1200, 500)
  return (
    <div className="mb-4">
      <img src={src} alt="campbells soup can" className="w-full h-auto" />
    </div>
  )
}

export default Hero
