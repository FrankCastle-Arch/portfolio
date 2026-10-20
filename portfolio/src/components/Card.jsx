function Card() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-purple-600">Hello, Tailwind!</h2>
      <p className="text-4xl font-bold text-red-500">Styled with utility classes.</p>
      <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
        Click me
      </button>
    </div>
  )
}

export default Card