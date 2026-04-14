import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiBellSimpleZ, PiClockCounterClockwiseBold, PiVideoCameraBold } from 'react-icons/pi';
import { RiArchiveLine, RiDeleteBinLine } from 'react-icons/ri';
import { Link, useLoaderData, useParams } from 'react-router';
import { FriendsContext } from '../../context/friendsDataProvider';

const FriendAbout = () => {
    const friendData = useLoaderData();
    const { id: fdId } = useParams();

    const friend = friendData?.find(fd => Number(fd.id) === Number(fdId));

    // ContextApi
    const {friendsContactData, setFriendsContactData, hanldeFriendsContactData} = useContext(FriendsContext);

    if (!friend) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner text-success"></span>
            </div>
        );
    }

    return (
        <div className="bg-[#F8FAFC] min-h-screen p-4 md:p-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
                
                {/* Left Column */}
                <div className="lg:col-span-4 space-y-5">

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-lg">
                            <img 
                                src={friend.picture} 
                                alt={friend.name} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        <h1 className="text-[22px] font-bold text-[#1F2937] mb-2">{friend.name}</h1>
                        
                        <div className="space-y-2 mb-4">
                            <p className={`text-white capitalize text-[13px] inline-block px-3 py-0.75 rounded-full ${
                                friend.status === 'on-track' ? 'bg-[#244D3F]' : 
                                friend.status === 'almost due' ? 'bg-[#EFAD44]' : 
                                friend.status === 'overdue' ? 'bg-[#EF4444]' : 'bg-gray-500'
                            }`}
                            >
                                {friend.status}
                            </p>
                            <div className='flex gap-1'>
                              {friend.tags.map((tag, index) => (
                                <span key={index} className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#CBFADB] text-[#244D3F]">
                                      {tag}
                                  </span>
                              ))}
                            </div>
                        </div>
                        
                        <p className="text-[#64748B] italic mb-2">"{friend.bio}"</p>
                        <p className="text-sm text-[#64748B]">Preferred: {friend.email}</p>
                    </div>


                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl font-medium text-slate-700 flex items-center justify-center gap-1 hover:bg-slate-50 transition shadow-sm">
                            <PiBellSimpleZ size={20}/> Snooze 2 Weeks
                        </button>
                        <button className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl font-medium text-slate-700 flex items-center justify-center gap-1 hover:bg-slate-50 transition shadow-sm">
                            <RiArchiveLine size={19} /> Archive
                        </button>
                        <Link to='/'>
                          <button className="w-full cursor-pointer py-3 px-4 bg-white border border-slate-200 rounded-xl font-medium text-red-500 flex items-center justify-center gap-1 hover:bg-red-50 transition shadow-sm">
                              <RiDeleteBinLine size={20} /> Delete
                          </button>
                        </Link>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-8 space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="h-34 w-auto flex flex-col items-center justify-center bg-white rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
                            <h2 className="text-4xl font-bold text-[#244D3F]">{friend.days_since_contact}</h2>
                            <p className="text-[#64748B] text-[15px]">Days Since Contact</p>
                        </div>
                        <div className="h-34 w-auto flex flex-col items-center justify-center bg-white rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
                            <h2 className="text-4xl font-bold text-[#244D3F]">{friend.goal}</h2>
                            <p className="text-[#64748B] text-[15px]">Goal (Days)</p>
                        </div>
                        <div className="h-34 w-auto flex flex-col items-center justify-center bg-white rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
                            <h2 className="text-4xl font-bold text-[#244D3F]">{new Date(friend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</h2>
                            <p className="text-[#64748B] text-[15px]">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal */}
                    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg text-[#244D3F] font-semibold">Relationship Goal</h3>
                            <button className="px-4 py-1.5 border border-slate-200 bg-gray-50 rounded-sm text-sm font-medium hover:bg-gray-100">Edit</button>
                        </div>
                        <p className="text-[#64748B]">Connect every <span className="font-bold text-[#1F2937]">{friend.goal} days</span></p>
                    </div>

                    {/* Quick Check-In */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-lg text-[#244D3F] font-semibold mb-6">Quick Check-In</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            <button onClick={() => hanldeFriendsContactData(friend, 'Call')} className="flex flex-col items-center justify-center h-26 border border-gray-200 rounded-xl bg-[#F8FAFC] hover:bg-gray-100 transition gap- cursor-pointer active:scale-95">
                                <FiPhoneCall size={22} />
                                <span className="font-semibold text-slate-700">Call</span>
                            </button>

                            <button onClick={() => hanldeFriendsContactData(friend, 'Text')} className="flex flex-col items-center justify-center h-26 border border-gray-200 rounded-xl bg-[#F8FAFC] hover:bg-gray-100 transition gap- cursor-pointer active:scale-95">
                                <MdOutlineTextsms size={22} />
                                <span className="font-semibold text-slate-700">Text</span>
                            </button>

                            <button onClick={() => hanldeFriendsContactData(friend, 'Video')} className="flex flex-col items-center justify-center h-26 border border-gray-200 rounded-xl bg-[#F8FAFC] hover:bg-gray-100 transition gap- cursor-pointer active:scale-95">
                                <PiVideoCameraBold size={22} />
                                <span className="font-semibold text-slate-700">Video</span>
                            </button>
                        </div>
                    </div>

                    {/* Recent Interactions */}
                    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm ">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-[#244D3F]">Recent Interactions</h2>
                            <button className="flex items-center gap-1.5 px-3 py-1 border border-gray-200 rounded text-sm text-[#1F2937] hover:bg-gray-50">
                            <PiClockCounterClockwiseBold size={16} /> Full History
                            </button>
                        </div>

                        <div className="divide-y divide-gray-200">
                            <div className="flex justify-between items-center py-4">
                            <div className="flex items-center gap-3">
                                <MdOutlineTextsms size={24} className="text-gray-700" />
                                <div>
                                <p className="font-semibold text-[#1F2937] leading-tight">Text</p>
                                <p className="text-sm text-[#64748B]">Asked for career advice</p>
                                </div>
                            </div>
                            <span className="text-sm text-[#64748B]">Jan 28, 2026</span>
                            </div>

                            <div className="flex justify-between items-center py-4">
                            <div className="flex items-center gap-4">
                                <FiPhoneCall size={22} className="text-gray-700" />
                                <div>
                                <p className="font-semibold text-[#1F2937] leading-tight">Meetup</p>
                                <p className="text-sm text-[#64748B]">Industry conference meetup</p>
                                </div>
                            </div>
                            <span className="text-sm text-[#64748B]">Jan 28, 2026</span>
                            </div>

                            <div className="flex justify-between items-center py-4">
                            <div className="flex items-center gap-4">
                                <PiVideoCameraBold size={22} className="text-gray-700" />
                                <div>
                                <p className="font-semibold text-[#1F2937] leading-tight">Video</p>
                                <p className="text-sm text-[#64748B]">Asked for career advice</p>
                                </div>
                            </div>
                            <span className="text-sm text-[#64748B]">Jan 28, 2026</span>
                            </div>

                            <div className="flex justify-between items-center pt-4">
                            <div className="flex items-center gap-4">
                                <FiPhoneCall size={22} className="text-gray-700" />
                                <div>
                                <p className="font-semibold text-[#1F2937] leading-tight">Text</p>
                                <p className="text-sm text-[#64748B]">Asked for career advice</p>
                                </div>
                            </div>
                            <span className="text-sm text-[#64748B]">Jan 28, 2026</span>
                            </div>

                        </div>
                        </div>


                </div>
            </div>
        </div>
    );
};

export default FriendAbout;

