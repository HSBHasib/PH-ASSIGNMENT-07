import React from 'react'
import { NavLink } from 'react-router'

const MyNavLink = ({to, children}) => {
  return (
    <div className='flex '>
      <NavLink to={to} className={({isActive}) => `w-full flex items-center gap-1 text-[15px] font-semibold px-4 py-2 rounded-sm ${isActive ? 'bg-[#244D3F] text-white' : 'text-[#64748B]'}` }>{children}</NavLink>
    </div>
  )
}

export default MyNavLink
