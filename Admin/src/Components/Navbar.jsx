import navlogo from '../assets/Admin_Assets/nav-logo.svg'
import navprofile from '../assets/Admin_Assets/nav-profile-clean.svg'

function Navbar() {
  return (
    <div className="w-full bg-white shadow-md px-4 py-2 flex justify-between items-center">
      {/* Left - Logo */}
      <img src={navlogo} alt="nav logo" className="h-12 sm:h-14 md:h-16 w-auto" />

      {/* Right - Profile inside circular wrapper */}
      <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full overflow-hidden border border-gray-300">
        <img
          src={navprofile}
          alt="nav profile"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

export default Navbar
