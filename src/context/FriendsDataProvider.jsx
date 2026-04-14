import React, { createContext, useState } from 'react'

export const FriendsContext = createContext();

const FriendsDataProvider = ({children}) => {

    const [friendsContactData, setFriendsContactData] = useState([]);
    
    const hanldeFriendsContactData = (currentData, type) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date().toLocaleDateString('en-US', options);

    const newInteraction = {
        friendId: currentData.id,
        name: currentData.name,
        method: type,
        date: formattedDate
    };

    setFriendsContactData((prevData) => [...prevData, newInteraction]);    
    };

    const data = {
        friendsContactData,
        setFriendsContactData,
        hanldeFriendsContactData
    };

  return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
}

export default FriendsDataProvider
