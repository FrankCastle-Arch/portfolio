import heroPhoto from "./hero-photo.js"

function Hero() {
  const [src, alt] = heroPhoto(1200, 500, "campbells soup can")
  return (
    <div className="hero">
      <img src={src} alt={alt} />
    </div>


  )
}

export default Hero
