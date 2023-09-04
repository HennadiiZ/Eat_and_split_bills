// // import { useState } from 'react';
// import Friend from './Friend';

// export default function FriendsList({
//   initialFriends,
//   selectedFriend,
//   setSelectedFriend,
// }) {
//   function selectAfriendHandler(id) {
//     initialFriends.filter((friend) => {
//       if (friend.id === id) {
//         setSelectedFriend(friend);
//       }
//     });
//   }

//   return (
//     <ul>
//       {initialFriends.map((item) => (
//         <Friend
//           item={item}
//           key={item.id}
//           selectedFriend={selectedFriend}
//           setSelectedFriend={setSelectedFriend}
//           selectAfriendHandler={selectAfriendHandler}
//         />
//       ))}
//     </ul>
//   );
// }
//
//------------------------------------------------------------------

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
//
// function Friend({
//   item,
//   selectedFriend,
//   setSelectedFriend,
//   selectAfriendHandler,
// }) {
//   const isSelected = selectedFriend?.id === item?.id;

//   return (
//     <li className={isSelected ? 'selected' : ''}>
//       <img src={item.image} alt={item.name}></img>
//       <h3>{item.name}</h3>

//       {item.balance < 0 && (
//         <p className='red'>
//           You owe {item.name} ${Math.abs(item.balance)}
//         </p>
//       )}
//       {item.balance > 0 && (
//         <p className='green'>
//           {item.name} owes you ${Math.abs(item.balance)}
//         </p>
//       )}
//       {item.balance === 0 && <p>You and {item.name} are even</p>}
//       <Button click={() => selectAfriendHandler(item.id)}>
//         {isSelected ? 'Close' : 'Select'}
//       </Button>
//     </li>
//   );
// }
