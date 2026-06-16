const categories = [
  { icon: "🏖️", label: "Beach" },
  { icon: "🏔️", label: "Mountains" },
  { icon: "🏕️", label: "Camping" },
  { icon: "🏊", label: "Pools" },
  { icon: "🌆", label: "City" },
  { icon: "🏡", label: "Countryside" },
  { icon: "⛵", label: "Boats" },
  { icon: "🌴", label: "Tropical" },
  { icon: "❄️", label: "Arctic" },
  { icon: "🏰", label: "Castles" },
]

function CategoryBar() {
  return (
    <div className="flex items-center gap-8 px-10 py-4 overflow-x-auto border-b">
      {categories.map((cat) => (
        <div key={cat.label} className="flex flex-col items-center gap-1 cursor-pointer text-gray-500 hover:text-black min-w-fit">
          <span className="text-2xl">{cat.icon}</span>
          <span className="text-xs">{cat.label}</span>
        </div>
      ))}
    </div>
  )
}

export default CategoryBar