


function Footer() {
  let year = new Date().getFullYear()
  return <p>&copy; {year} Danielle ER</p>
}

function App() {
  return (
    <div className="container">
      <Header />
      <p>Pokémon trainer from Pallet Town.</p>
      <Footer />
    </div>
  )
}

export default Header
