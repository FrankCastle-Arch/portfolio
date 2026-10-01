function Card() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-purple-600">Hello, Tailwind!</h2>
      <p className="mt-2 text-gray-600">Styled with utility classes.</p>
      <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
        Click me
      </button>
    </div>
  )
}

export default Card
