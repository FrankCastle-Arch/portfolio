import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className="w-full">
      <h2 className="mb-6 text-3xl font-bold text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProjectCard
          name="Spin Cycle"
          description="A top 50 playlist app powered by my own data API, which makes me both the DJ and the record store."
          liveUrl="https://frankcastle-arch.github.io/data-playlist/"
          repoUrl="https://github.com/FrankCastle-Arch/data-playlist"
        />
        <ProjectCard
          name="Card-o-Matic"
          description="Fill in a few blanks and it generates a custom greeting card, so you can send heartfelt wishes with questionable grammar."
          liveUrl="https://frankcastle-arch.github.io/greeting-card-generator/"
          repoUrl="https://github.com/FrankCastle-Arch/greeting-card-generator"
        />
        <ProjectCard
          name="The Overlooked & Overpowered"
          description="Spin the roulette for a random Marvel underdog, then check the rankings of power level versus popularity to see who can level a city and still never gets invited to the movies. Powered by an API I built myself."
          liveUrl="https://github.com/FrankCastle-Arch/capstoneLevel2"
          repoUrl="https://github.com/FrankCastle-Arch/project-three"
        />
      </div>
    </section>
  )
}

export default Projects










