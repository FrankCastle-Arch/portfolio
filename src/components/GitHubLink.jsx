function GitHubLink() {
  let url = "https://github.com/FrankCastle-Arch"
  let label = "My GitHub"
  return (
    
    <a
      href={url}
      className="inline-block px-4 py-2 bg-black font-mono text-white rounded-lg hover:bg-rose-700"
    >
      {label}
    </a>
      
  )    
}

export default GitHubLink