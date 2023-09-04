import Friend from './Friend';

export default function FriendsList({
  initialFriends,
  selectedFriend,
  setSelectedFriend,
}) {
  function selectAfriendHandler(id) {
    // initialFriends.filter((friend) => {
    //   if (friend.id === id) {
    //     setSelectedFriend(friend);
    //   }
    // });
    if (selectedFriend && selectedFriend.id === id) {
      setSelectedFriend(null); // Deselect the current friend
    } else {
      const selected = initialFriends.find((friend) => friend.id === id);
      if (selected) {
        setSelectedFriend(selected);
      }
    }
  }

  return (
    <ul>
      {initialFriends.map((item) => (
        <Friend
          item={item}
          key={item.id}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          selectAfriendHandler={selectAfriendHandler}
        />
      ))}
    </ul>
  );
}
