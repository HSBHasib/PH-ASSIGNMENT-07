import { IoHomeOutline, IoTimeOutline } from "react-icons/io5"
import MyNavLink from "../../MyNavLink/MyNavLink"
import { TfiStatsUp } from "react-icons/tfi"
import logo from '../../../assets/image/logo.png'
import { Link } from "react-router"

const Navber = () => {

  const navItem = [
    { path: '/',         text: 'Home',     icon: <IoHomeOutline size={22} />},
    { path: '/timeline', text: 'Timeline', icon: <IoTimeOutline size={22} />},
    { path: '/stats',    text: 'Stats',    icon: <TfiStatsUp    size={22} />},
  ]

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar px-10">
        <div className="flex-1">
          <Link>
            <img className="object-cover w-34" src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <ul className="flex">
              {
                navItem.map((data, idx) => 
                  <li key={idx}><MyNavLink to={data.path}>{data.icon} {data.text}</MyNavLink></li> 
              )
              }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navber
