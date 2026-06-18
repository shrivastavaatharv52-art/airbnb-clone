import { useState } from "react"
import { Badge } from "@/Components/ui/badge"

// PropertyCard displays a single property listing
function PropertyCard({ image, location, distance, dates, price, rating }) {
  // Track whether user has liked this property
  const [liked, setLiked] = useState(false)

  return (
    <div className="cursor-pointer group">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={location}
          className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        />
        {/* Guest favourite badge using ShadCN */}
        <Badge className="absolute top-3 left-3 bg-white text-black font-semibold text-xs">
          Guest favourite
        </Badge>
        {/* Heart/like button */}
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
        <p className="mt-1">
          <span className="font-semibold">${price}</span> night
        </p>
      </div>
    </div>
  )
}

export default PropertyCard