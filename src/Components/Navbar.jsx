import { useState } from "react"

function Navbar() {
  const [location, setLocation] = useState("")
  const [guests, setGuests] = useState("")

  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow-md sticky top-0 bg-white z-50">
      <div className="text-red-500 text-2xl font-bold">
        airbnb
      </div>

      <div className="flex items-center border rounded-full px-4 py-2 shadow-sm gap-2">
        <input
          type="text"
          placeholder="Anywhere"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="text-sm outline-none w-24"
        />
        <span className="text-gray-300">|</span>
        <span className="text-sm font-medium">Any week</span>
        <span className="text-gray-300">|</span>
        <input
          type="text"
          placeholder="Add guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="text-sm outline-none w-20 text-gray-400"
        />
        <button className="bg-red-500 text-white rounded-full p-2 ml-2">
          🔍
        </button>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Airbnb your home</span>
        <div className="flex items-center border rounded-full px-3 py-2 gap-2">
          <span>☰</span>
          <span>👤</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar