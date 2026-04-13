import React, { createContext, useState } from 'react'

export const FriendsContext = createContext();

const FriendsDataProvider = ({children}) => {

    const [friendList, setFriendList] = useState([]);
    
    const hanldeFriendData = (currentData) => {
        const allReadyExists = friendList.find(friend => friend.id === currentData.id);

    }

    const data = {
        friendList,
        setFriendList
    };

  return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
}

export default FriendsDataProvider
