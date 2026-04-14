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
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start sm:px-10">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className=" menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
          navItem.map((data, idx) => 
            <li key={idx}><MyNavLink to={data.path}>{data.icon} {data.text}</MyNavLink></li> 
          )
        }
      </ul>
    </div>
      <Link to='/' className=" max-[500px]:-ml-2">
        <img className="object-cover w-34" src={logo} alt="logo" />
      </Link>
  </div>
  <div className="navbar-end hidden list-none lg:flex">
    {
      navItem.map((data, idx) => 
        <li key={idx}><MyNavLink to={data.path}>{data.icon} {data.text}</MyNavLink></li> 
      )
    }
  </div>
</div>
  )
}

export default Navber
