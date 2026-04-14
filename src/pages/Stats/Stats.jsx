import React, { useContext } from 'react';
import { FriendsContext } from '../../context/friendsDataProvider';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Link } from 'react-router';


const Stats = () => {
    const { friendsContactData } = useContext(FriendsContext);
    console.log(friendsContactData);

    if(friendsContactData.length === 0) {
      return <div className="flex flex-col items-center justify-center w-3/4 mx-auto p-6 text-center">
                <div className="bg-white border border-gray-100 min-h-[50vh] rounded-lg p-8 shadow-sm w-full flex flex-col items-center justify-center">

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-[#1F2937]">Friendship Analytics</h2>
                        <p className="text-gray-500 text-sm px-4">
                            No interaction data found yet! Start calling or texting your friends to see your friendship breakdown.
                        </p>
                    </div>
                    
                    <Link to='/'>
                      <button  
                          className="cursor-pointer active:scale-95 mt-6 px-6 py-2 bg-[#244D3F] text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
                          >
                          Back to Home
                      </button>
                    </Link>
                </div>
            </div>
    }

    const counts = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    friendsContactData.forEach(fdData => {
      console.log(fdData.method)
      if(fdData.method === 'Call') {
        counts.Call++;
      } else if(fdData.method === 'Text') {
        counts.Text++;
      } else if(fdData.method === 'Video') {
        counts.Video++;
      }
    });

    const data = [
      { name: 'Call', value: counts.Call, fill: '#244D3F' },
      { name: 'Text', value: counts.Text , fill: '#7F37F5' },
      { name: 'Video', value: counts.Video, fill: '#37A163' },
    ];

  return (
      <div className='w-3/4 mx-auto pt-4 pb-10'>
        <h1 className='text-[#1F2937] font-bold text-4xl py-6'>Friendship Analytics</h1>
        <div className='bg-white shadow-sm p-6 rounded-lg'>
          <h3 className=' font-semibold text-[#244D3F] text-[16px]'>By Interaction Type</h3>
          <div className='flex justify-center items-center h-[52vh] w-auto'>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '45vh', aspectRatio: 1 }} responsive>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="7"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend 
            iconType="circle" 
            iconSize={7} 
            layout="horizontal" 
            verticalAlign="bottom" 
            align="center"
            wrapperStyle={{ 
              paddingTop: "30px",
            }}
            formatter={(value) => (
                <span style={{ color: "#6B7280", fontSize: "14px" }}>
                  {value}
                </span>
              )}
          />
        <Tooltip 
            contentStyle={{ 
              borderRadius: "10px",
              border: "none",          
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", 
              padding: "10px"
            }} 
            cursor={{ fill: 'transparent' }} 
          />

            </PieChart>
          </div>
        </div>
      </div>  
  );
};

export default Stats;
