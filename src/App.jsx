import { useState } from "react"
import Navbar from './Components/Navbar'
import CategoryBar from './Components/CategoryBar'
import PropertyCard from './Components/PropertyCard'
import Footer from './Components/Footer'

// Property data with categories assigned
const allProperties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    location: "Bali, Indonesia",
    distance: "2,500 miles away",
    dates: "Mar 1-7",
    price: 120,
    rating: 4.9,
    category: "Tropical",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    location: "Paris, France",
    distance: "3,100 miles away",
    dates: "Apr 5-10",
    price: 200,
    rating: 4.8,
    category: "City",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    location: "Tokyo, Japan",
    distance: "6,700 miles away",
    dates: "May 10-15",
    price: 150,
    rating: 4.7,
    category: "City",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
    location: "New York, USA",
    distance: "1,200 miles away",
    dates: "Jun 1-6",
    price: 180,
    rating: 4.6,
    category: "City",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
    location: "Sydney, Australia",
    distance: "9,500 miles away",
    dates: "Jul 15-20",
    price: 160,
    rating: 4.8,
    category: "Beach",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    location: "London, UK",
    distance: "3,500 miles away",
    dates: "Aug 5-10",
    price: 190,
    rating: 4.9,
    category: "City",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
    location: "Swiss Alps",
    distance: "4,200 miles away",
    dates: "Dec 1-7",
    price: 250,
    rating: 5.0,
    category: "Mountains",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800",
    location: "Maldives",
    distance: "5,100 miles away",
    dates: "Feb 10-15",
    price: 350,
    rating: 5.0,
    category: "Beach",
  },
]

function App() {
  // Track which category is selected — null means show all
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Filter properties based on selected category
  const filteredProperties = selectedCategory
    ? allProperties.filter((p) => p.category === selectedCategory)
    : allProperties

  const handleCategorySelect = (label) => {
    // Clicking same category again deselects it
    setSelectedCategory(prev => prev === label ? null : label)
  }

  return (
    <div>
      <Navbar />
      <CategoryBar
        selected={selectedCategory}
        onSelect={handleCategorySelect}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-8">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App