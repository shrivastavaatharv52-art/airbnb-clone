// Footer component with 4 columns of links
function Footer() {
  return (
    <footer className="border-t px-10 py-6 mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Support links */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="text-gray-500 space-y-2">
            <li>Help Centre</li>
            <li>AirCover</li>
            <li>Safety information</li>
            <li>Accessibility</li>
          </ul>
        </div>
        {/* Community links */}
        <div>
          <h3 className="font-semibold mb-3">Community</h3>
          <ul className="text-gray-500 space-y-2">
            <li>Airbnb.org</li>
            <li>Support refugees</li>
            <li>Combating discrimination</li>
          </ul>
        </div>
        {/* Hosting links */}
        <div>
          <h3 className="font-semibold mb-3">Hosting</h3>
          <ul className="text-gray-500 space-y-2">
            <li>Airbnb your home</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
          </ul>
        </div>
        {/* Company links */}
        <div>
          <h3 className="font-semibold mb-3">Airbnb</h3>
          <ul className="text-gray-500 space-y-2">
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
          </ul>
        </div>

      </div>
      {/* Copyright notice */}
      <div className="border-t mt-6 pt-4 text-sm text-gray-500">
        © 2024 Airbnb Clone. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer