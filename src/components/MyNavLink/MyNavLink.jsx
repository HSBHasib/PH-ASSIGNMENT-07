import React from 'react'
import { NavLink } from 'react-router'

const MyNavLink = ({to, children}) => {
  return (
    <div className='flex'>
      <NavLink to={to} className={({isActive}) => `flex items-center gap-1 font-semibold px-4 py-1.5 rounded-sm ${isActive ? 'bg-[#244D3F] text-white' : 'text-[#64748B]'}` }>{children}</NavLink>
    </div>
  )
}

export default MyNavLink
