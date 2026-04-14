import { Await, useLoaderData } from 'react-router'
import FriendsDets from '../FriendsDets/FriendsDets';
import { useEffect, useState } from 'react';

const Friends = () => {
    const [friendData, setFriendData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {
                setFriendData(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-30 text-3xl"><span className="loading loading-spinner text-success"></span></div>;
    }


    return (
    <div className='w-3/4 mx-auto pt-5 pb-13 space-y-3'>
        <h1 className='text-xl font-semibold text-[#1F2937] '>Your Friends</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {

                  friendData.map((data, idx) => <FriendsDets key={idx} data={data}/>)
                }
        </div>
    </div>
  )
}

export default Friends
