import { useState } from 'react'

function ClickLabPortfolioCard() {
  const project = { 
      name: "Click Lab",
      description: "A page of buttons that count, change, and react to clicks.",
      details: "I built it in Level 2 to practice click listeners and the counter pattern.",
      liveUrl: "https://FrankCastle-Arch.github.io/click-lab/",
      repoUrl: "https://github.com/FrankCastle-Arch/click-lab"
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
      <button onClick={addLike}>Like {likes}</button>
    </article>
  )
}



export default ClickLabPortfolioCard