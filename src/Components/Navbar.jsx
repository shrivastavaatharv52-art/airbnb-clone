import { useState, useEffect } from "react"

function Navbar() {
  const [location, setLocation] = useState("")
  const [guests, setGuests] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-md transition-all duration-300 w-full">

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4">

        {/* Airbnb logo */}
        <div className="flex items-center gap-1 text-red-500 flex-shrink-0">
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-red-500">
            <path d="M16 1C10.925 1 6 6.925 6 13.5c0 4.07 2.795 9.274 8.385 15.612a2.5 2.5 0 003.23 0C23.205 22.774 26 17.57 26 13.5 26 6.925 21.075 1 16 1zm0 17a5 5 0 110-10 5 5 0 010 10z"/>
          </svg>
          <span className="text-lg md:text-xl font-bold">airbnb</span>
        </div>

        {/* Compact search — shows when scrolled */}
        {scrolled && (
          <div className="flex items-center border rounded-full shadow-sm px-3 py-2 gap-2 text-sm font-medium">
            <span className="hidden sm:block">Anywhere</span>
            <span className="text-gray-300 hidden sm:block">|</span>
            <span className="hidden sm:block">Any week</span>
            <span className="text-gray-300 hidden sm:block">|</span>
            <span className="text-gray-400 text-xs">Add guests</span>
            <button className="bg-red-500 text-white rounded-full p-2 ml-1">🔍</button>
          </div>
        )}

        {/* Tabs — desktop only, hidden when scrolled */}
        {!scrolled && (
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <span className="border-b-2 border-black pb-1 cursor-pointer">Homes</span>
            <span className="text-gray-400 cursor-pointer hover:text-black">Experiences</span>
            <span className="text-gray-400 cursor-pointer hover:text-black">Services</span>
          </div>
        )}

        {/* Right side */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <span className="hidden md:block text-sm font-medium cursor-pointer">Airbnb your home</span>
          <div className="flex items-center border rounded-full px-3 py-2 gap-2 cursor-pointer hover:shadow-md transition-all">
            <span>☰</span>
            <span>👤</span>
          </div>
        </div>
      </div>

      {/* Hero search bar — hidden when scrolled */}
      {!scrolled && (
        <div className="flex justify-center pb-4 px-4">
          <div className="flex items-center border rounded-full shadow-md w-full max-w-2xl overflow-hidden">

            {/* Where */}
            <div className="flex flex-col px-4 py-2 flex-1 min-w-0">
              <span className="text-xs font-bold">Where</span>
              <input
                type="text"
                placeholder="Search destinations"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-xs md:text-sm outline-none text-gray-500 bg-transparent w-full"
              />
            </div>

            {/* When — hidden on small screens */}
            <div className="hidden sm:flex flex-col px-4 py-2 flex-1 border-l">
              <span className="text-xs font-bold">When</span>
              <span className="text-xs md:text-sm text-gray-400">Add dates</span>
            </div>

            {/* Who — hidden on small screens */}
            <div className="hidden sm:flex flex-col px-4 py-2 flex-1 border-l">
              <span className="text-xs font-bold">Who</span>
              <input
                type="text"
                placeholder="Add guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="text-xs md:text-sm outline-none text-gray-400 bg-transparent w-full"
              />
            </div>

            {/* Search button */}
            <button className="bg-red-500 text-white rounded-full p-3 m-2 hover:bg-red-600 transition-all flex-shrink-0">
              🔍
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar