import Card from './components/Card'
import Answer from './components/Answer'

function App() {
  return (
    <div>
      <Card />
      <div className="flex gap-2 justify-center mt-6">
        <Answer label="Option A" />
        <Answer label="Option B" />
      </div>
    </div>
  )
}

export default App