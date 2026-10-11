function Partner() {
  const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  const altText = "Pikachu"
  return <img src={imageUrl} alt={altText} width={100} />
}

return (
  <div>
    <img src={imageUrl} alt={altText} width={100} />
    <p>{altText}</p>
  </div>
)
