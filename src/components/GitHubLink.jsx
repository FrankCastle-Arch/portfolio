function GitHubLink() {
  let url = "https://github.com/FrankCastle-Arch"
  let label = "My GitHub"
  return (
    <a
      href={url}
      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      {label}
    </a>
  )
}

export default GitHubLink