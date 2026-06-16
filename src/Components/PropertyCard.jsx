import { useState } from "react"

function PropertyCard({ image, location, distance, dates, price, rating }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={location}
          className="w-full h-64 object-cover rounded-xl"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 text-xl"
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="mt-2">
        <div className="flex justify-between items-center">
          <span className="font-semibold">{location}</span>
          <span className="flex items-center gap-1">⭐ {rating}</span>
        </div>
        <p className="text-gray-500 text-sm">{distance}</p>
        <p className="text-gray-500 text-sm">{dates}</p>
        <p className="mt-1"><span className="font-semibold">${price}</span> night</p>
      </div>
    </div>
  )
}

export default PropertyCard