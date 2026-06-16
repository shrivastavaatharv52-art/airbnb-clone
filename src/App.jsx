import Navbar from './components/Navbar'
import CategoryBar from './components/CategoryBar'
import PropertyCard from './components/PropertyCard'
import Footer from './components/Footer'

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    location: "Bali, Indonesia",
    distance: "2,500 miles away",
    dates: "Mar 1-7",
    price: 120,
    rating: 4.9,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    location: "Paris, France",
    distance: "3,100 miles away",
    dates: "Apr 5-10",
    price: 200,
    rating: 4.8,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    location: "Tokyo, Japan",
    distance: "6,700 miles away",
    dates: "May 10-15",
    price: 150,
    rating: 4.7,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
    location: "New York, USA",
    distance: "1,200 miles away",
    dates: "Jun 1-6",
    price: 180,
    rating: 4.6,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
    location: "Sydney, Australia",
    distance: "9,500 miles away",
    dates: "Jul 15-20",
    price: 160,
    rating: 4.8,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
    location: "London, UK",
    distance: "3,500 miles away",
    dates: "Aug 5-10",
    price: 190,
    rating: 4.9,
  },
]

function App() {
  return (
    <div>
      <Navbar />
      <CategoryBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App