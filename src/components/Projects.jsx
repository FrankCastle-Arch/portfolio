import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className="w-full">
      <h2 className="mb-6 text-3xl font-bold text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProjectCard
          name="Spin Cycle"
          description="A playlist page that loads its songs from my own data API."
          liveUrl="https://frankcastle-arch.github.io/data-playlist/"
          repoUrl="https://github.com/FrankCastle-Arch/data-playlist"
        />
        <ProjectCard
          name="Card-o-Matic"
          description="A madlib themed app that generates custom greeting cards."
          liveUrl="https://frankcastle-arch.github.io/greeting-card-generator/"
          repoUrl="https://github.com/FrankCastle-Arch/greeting-card-generator"
        />
        <ProjectCard
          name="The Overlooked & Overpowered"
          description="An app that shows one random Marvel underdog character at a time, with a stat comparing how powerful they are to how well-known they are."
          liveUrl="https://github.com/FrankCastle-Arch/capstoneLevel2"
          repoUrl="https://github.com/FrankCastle-Arch/project-three"
        />
      </div>
    </section>
  )
}

export default Projects










