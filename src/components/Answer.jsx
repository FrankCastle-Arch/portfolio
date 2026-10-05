import { useState } from 'react'

function Answer({ label }) {
  const [selected, setSelected] = useState(false)

  return (
    <button
      onClick={() => setSelected(!selected)}
      className={`px-4 py-2 rounded-lg border ${
        selected ? 'bg-green-500 text-white' : 'bg-white text-gray-800'
      }`}
    >
      {label}
    </button>
  )
}

export default Answer