import { useContext, useState } from 'react';
import { FriendsContext } from '../../context/friendsDataProvider';
import callImg from "../../assets/image/call.png";
import textImg from "../../assets/image/text.png";
import videoImg from "../../assets/image/video.png";

const TimeLine = () => {
    const { friendsContactData } = useContext(FriendsContext);
    const [filter, setFilter] = useState('All');

    // Filter Logic
    const filteredData = friendsContactData.filter(item => {
        if (filter === 'All') return true;
        return item.method.toLowerCase() === filter.toLowerCase();
    });

    // Icon Selector Function
    const getIcon = (method) => {
        switch (method.toLowerCase()) {
            case 'call': return <img className='w-7' src={callImg} alt="callImg" />;
            case 'text': return <img className='w-7' src={textImg} alt="textImg" />;
            case 'video': return <img className='w-7' src={videoImg} alt="videoImg" />;
        }
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-[#1F2937] mb-6">Timeline</h1>

                {/* Sort based on type */}
                <div className="mb-6">
                    <select 
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="border border-gray-200 text-gray-600 py-2 px-3 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 w-full md:w-64 cursor-pointer "
                    >
                        <option value="All">Filter timeline</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                </div>

                {/* Timeline List */}
                <div className="space-y-5">
                    {filteredData.length > 0 ? (
                        filteredData.slice().reverse().map((item, index) => (
                          <div 
                              key={index} 
                              className="bg-white border border-gray-100 rounded-lg px-4 py-3 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="rounded-lg flex items-center justify-center">
                                    {getIcon(item.method)}
                                </div>

                                <div>
                                    <p className="text-[#64748B] font-medium">
                                        <span className="font-bold text-[#244D3F]">{item.method}</span> with {item.name}
                                    </p>
                                    <p className="text-[#64748B] font-medium text-sm">{item.date}</p>
                                </div>
                          </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center p-20 text-center bg-white rounded-lg shadow">
                          <div className="text-6xl mb-4 opacity-40">
                              📂
                          </div>
                              <h3 className="max-[400px]:text-sm text-xl font-semibold text-gray-800 ">
                                  No Data Found
                              </h3>
                              <p className="max-[400px]:text-[10px] text-sm text-gray-500 max-w-[250px]">
                                  We couldn't find any results.
                              </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimeLine;