import React from 'react'
import { Link } from 'react-router';

const FriendsDets = ({data}) => {
    const {id, picture, name, days_since_contact, tags, status} = data;
  return (
    <Link to={`/friendAbout/${id}`}>
      <div className='space-y-2 h-54 bg-white shadow flex flex-col items-center justify-center py-[105px] rounded-md'>
        <div className='rounded-full'>
            <img className='w-14 h-14 object-cover rounded-full' src={picture} alt="name image" />
        </div>
        <p>{name}</p>
        <p className='text-[#64748B] text-[13px]'>{days_since_contact}d ago</p>
        <div className='flex gap-2'>
            {
                tags.map((tag, idx) => <p className='bg-[#CBFADB] uppercase px-3 py-0.5 text-[12px] font-medium text-[#244D3F] rounded-full' key={idx}>{tag}</p>)
            }
        </div>
       <p className={`text-white capitalize text-[13px] inline-block px-2 py-0.75 rounded-full ${
            status === 'on-track' ? 'bg-[#244D3F]' : 
            status === 'almost due' ? 'bg-[#EFAD44]' : 
            status === 'overdue' ? 'bg-[#EF4444]' : 'bg-gray-500'
        }`}
        >
            {status}
        </p>
      </div>
    </Link>
  )
}

export default FriendsDets
