// import { useState } from 'react';
import Friend from './Friend';

export default function FriendsList({
  initialFriends,
  selectedFriend,
  setSelectedFriend,
}) {
  function selectAfriendHandler(id) {
    initialFriends.filter((friend) => {
      if (friend.id === id) {
        setSelectedFriend(friend);
      }
    });
  }

  return (
    <ul>
      {initialFriends.map((item) => (
        <Friend
          item={item}
          key={item.id}
          selectedFriend={selectedFriend}
          selectAfriendHandler={selectAfriendHandler}
        />
      ))}
    </ul>
  );
}
