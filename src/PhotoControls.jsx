function PhotoControls({ onNext, onPrevious, onColor, onBlackAndWhite, onReset }) {
  return (
    <p>
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
      <button onClick={onColor}>Color</button>
      <button onClick={onBlackAndWhite}>Black and White</button> 
      <button onClick={onReset}>Reset</button>
  
    </p>
  )
}

export default PhotoControls
