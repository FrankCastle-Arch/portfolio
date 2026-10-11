function GreetingCardGeneratorPortfolioCard() {
  const name = "GreetingCardGenerator"
  const description = "A playlist page that loads its songs from my own data API."
  const liveUrl = "https://FrankCastle-Arch.github.io/GreetingCardGenerator/"
  const repoUrl = "https://github.com/FrankCastle-Arch/GreetingCardGenerator"
  
  return (
    <div className="flex-container">
        <article>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>
            <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
            </p>
            <button onClick={addLike}>Like ({likes})</button>
      </article>
    </div>
  )
}

export default GreetingCardGeneratorPortfolioCard