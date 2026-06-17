import { useState } from "react"

// Navbar component with Airbnb-style hero search bar
function Navbar() {
  const [location, setLocation] = useState("")
  const [guests, setGuests] = useState("")

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-md">
      
      {/* Top bar */}
      <div className="flex items-center justify-between px-10 py-4">
        <div className="text-red-500 text-2xl font-bold">airbnb</div>

        {/* Tabs */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <span className="border-b-2 border-black pb-1 cursor-pointer">Homes</span>
          <span className="text-gray-400 cursor-pointer hover:text-black">Experiences</span>
          <span className="text-gray-400 cursor-pointer hover:text-black">Services</span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium cursor-pointer">Airbnb your home</span>
          <div className="flex items-center border rounded-full px-3 py-2 gap-2 cursor-pointer">
            <span>☰</span>
            <span>👤</span>
          </div>
        </div>
      </div>

      {/* Hero search bar */}
      <div className="flex justify-center pb-4">
        <div className="flex items-center border rounded-full shadow-md divide-x w-full max-w-2xl">
          
          {/* Where */}
          <div className="flex flex-col px-6 py-3 flex-1">
            <span className="text-xs font-bold">Where</span>
            <input
              type="text"
              placeholder="Search destinations"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-sm outline-none text-gray-500 bg-transparent"
            />
          </div>

          {/* When */}
          <div className="flex flex-col px-6 py-3 flex-1">
            <span className="text-xs font-bold">When</span>
            <span className="text-sm text-gray-400">Add dates</span>
          </div>

          {/* Who */}
          <div className="flex flex-col px-6 py-3 flex-1">
            <span className="text-xs font-bold">Who</span>
            <input
              type="text"
              placeholder="Add guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="text-sm outline-none text-gray-400 bg-transparent"
            />
          </div>

          {/* Search button */}
          <button className="bg-red-500 text-white rounded-full p-4 m-2">
            🔍
          </button>

        </div>
      </div>

    </nav>
  )
}

export default Navbar