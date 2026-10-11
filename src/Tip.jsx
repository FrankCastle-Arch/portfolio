function TIP() {
  return (
    <div>
      <h1>Trainer Tip of the Day</h1>
      <Tip />
    </div>
  )
}


function Tip() {
  const tips = [
    "Rest your team before a gym battle.",
    "Carry more Potions than you think you need.",
    "Water beats fire, and grass beats water."
  ]
  return <p>Tip goes here.</p>
}

export default Tip