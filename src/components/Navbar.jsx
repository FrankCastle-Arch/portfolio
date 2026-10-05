function Navbar() {
  const linkStyle = "font-mono text-white font-bold hover:text-slate-500"

  return (
    <nav className="bg-black text-white rounded-xl shadow-md border border-gray-200 px-6 py-3">
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <li><a href="#name" className={linkStyle}>Danielle ER</a></li>
        <li className="ml-auto"><a href="#GitHubLink" className={linkStyle}>GitHub Link</a></li>
        <li><a href="#Projects" className={linkStyle}>My Projects</a></li>
        <li><a href="#Contact" className={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar