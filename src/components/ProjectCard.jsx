

function ProjectCard({ name, description, liveUrl, repoUrl }) {
  return (
    <article className="w-full p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
      <h2 className="text-2xl font-mono font-bold text-white-600">{name}</h2>
      <p className="mt-2 font-mono text-gray-600 grow">{description}</p>
      <div className="mt-4 flex gap-3">
        <a
          href={liveUrl}
          className="px-4 py-2 border border-black-600 bg-black font-mono text-white rounded-lg hover:bg-rose-700"
        >
          See it live
        </a>
        <a
          href={repoUrl}
          className="px-4 py-2 border border-black-600 bg-black font-mono text-white rounded-lg hover:bg-rose-700"
        >
          Read the code
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
