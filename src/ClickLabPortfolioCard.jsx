const project = {
  name: "Click Lab",
  description: "A page of buttons that count, change, and react to clicks.",
  details: "I built it in Level 2 to practice click listeners and the counter pattern.",
  liveUrl: "https://FrankCastle-Arch.github.io/click-lab/",
  repoUrl: "https://github.com/FrankCastle-Arch/click-lab",
};

function ClickLabPortfolioCard() {
  return (
    <div className="flex-container">
      <article>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>
          <a href={project.liveUrl}>See it live</a> · {" "}
          <a href={project.repoUrl}>Read the code</a>
        </p>
      </article>
    </div>
  );
}

export default ClickLabPortfolioCard; 