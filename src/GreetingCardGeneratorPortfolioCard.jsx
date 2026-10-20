import { useState } from 'react'
import LikeButton from './LikeButton.jsx'


function GreetingCardGeneratorPortfolioCard() {
  const project = { 
      name: "Card-o-Matic",
      description: "A mad libs style greeting card generator that uses a form to collect user input and then displays the completed greeting card.",
      details: "I built it in Level 2 to practice form handling and dynamic content rendering.",
      liveUrl: "https://FrankCastle-Arch.github.io/greeting-card-generator/",
      repoUrl: "https://github.com/FrankCastle-Arch/greeting-card-generator",
      status: "live"
    }

  const [likes, setLikes] = useState(0)
  const [open, setOpen] = useState(false)

  const addLike = () => {
    setLikes(likes + 1)
  }

  const toggleOpen = () => {
    setOpen(!open)
  }

  let text = project.description
  if (open) {
      text = `${project.description} ${project.details}`
  }

  let label = "Show More"
  if (open) {
    label = "Show Less"
  }

  let look = "outline"
  if (open) {
      look = ""
  }


  return (
    <article>
      <h2>{project.name}</h2>
      <p>{text}</p>
      <button className={look} onClick={toggleOpen}>{label}</button>
      <p>
        <a href={project.liveUrl}>See it live</a> · <a href={project.repoUrl}>Read the code</a>
      </p>
      <LikeButton likes={likes} onLike={addLike} />
    </article>
  )
}

export default GreetingCardGeneratorPortfolioCard