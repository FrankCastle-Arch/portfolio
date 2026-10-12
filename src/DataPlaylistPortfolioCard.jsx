import { useState } from 'react'

function DataPlaylistPortfolioCard() {
  const project = { 
      name: "Data Playlist",
      description: "A playlist page that loads its songs from my own data API.",
      details: "I built it in Level 2 to practice fetching data from an API and displaying it in a React component.",
      liveUrl: "https://FrankCastle-Arch.github.io/data-playlist/",
      repoUrl: "https://github.com/FrankCastle-Arch/data-playlist"
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
  text = project.description + " " + project.details
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
      <button className={look}onClick={toggleOpen}>{label}</button>
      <p>
        <a href={project.liveUrl}>See it live</a> · <a href={project.repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
    </article>
  )
}

export default DataPlaylistPortfolioCard; 
