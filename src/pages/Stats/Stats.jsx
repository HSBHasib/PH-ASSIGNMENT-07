import React, { useContext } from 'react';
import { FriendsContext } from '../../context/friendsDataProvider';
import PieChartWithPaddingAngle from './PieChart';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
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

    const data = [
      { name: 'Group A', value: 400, fill: '#7F37F5' },
      { name: 'Group B', value: 300, fill: '#244D3F' },
      { name: 'Group C', value: 300, fill: '#37A163' },
    ];

  return (
    <div>
      <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '40vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      </PieChart>
    </div>  
  );
};

export default Stats;