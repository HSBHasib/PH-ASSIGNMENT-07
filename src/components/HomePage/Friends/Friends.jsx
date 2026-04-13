import React from 'react'
import { useLoaderData } from 'react-router'
import FriendsDets from '../FriendsDets/FriendsDets';

const Friends = () => {
    const friendData = useLoaderData();
    // console.log(friendData);

  return (
    <div className='w-3/4 mx-auto pt-5 pb-13 space-y-3'>
        <h1 className='text-xl font-semibold text-[#1F2937] '>Your Friends</h1>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
            {
                friendData.map((data, idx) => <FriendsDets key={idx} data={data}/>)
            }
        </div>
    </div>
  )
}

export default Friends
