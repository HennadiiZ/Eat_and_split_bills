import { useState } from 'react';
import initialFriends from './data/data';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';

export default function App() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSplitBill(value) {
    console.log(value);

    // const updatedFriends = friends.map((friend) => {
    //   if (friend.id === selectedFriend.id) {
    //     return {
    //       ...friend,
    //       balance: parseFloat(value),
    //     };
    //   } else {
    //     return friend;
    //   }
    // });
    // setFriends(updatedFriends);

    // const updatedFriends = friends.map((friend) => {
    //   if (friend.id === selectedFriend.id) {
    //     return {
    //       ...friend,
    //       balance: parseFloat(value),
    //     };
    //   } else {
    //     return friend;
    //   }
    // });

    setFriends((friends) =>
      friends.map((friend) => {
        if (friend.id === selectedFriend.id) {
          return {
            ...friend,
            balance: parseFloat(value),
          };
        } else {
          return friend;
        }
      })
    );
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          initialFriends={friends}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          setIsOpenForm={setIsOpenForm} //-!
        />
        {isOpenForm && (
          <FormAddFriend setFriends={setFriends} formIsOpen={setIsOpenForm} />
        )}
        <Button click={() => setIsOpenForm((prev) => !prev)}>
          {isOpenForm ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          friends={friends}
          setFriends={setFriends}
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

// import { useState } from 'react';
// import initialFriends from './data/data';
// import FriendsList from './components/FriendsList';
// import FormAddFriend from './components/FormAddFriend';
// import Button from './components/Button';
// import FormSplitBill from './components/FormSplitBill';

// export default function App() {
//   const [isOpenForm, setIsOpenForm] = useState(false);
//   const [friends, setFriends] = useState(initialFriends);

//   const [selectedFriend, setSelectedFriend] = useState(null);

//   return (
//     <div className='app'>
//       <div className='sidebar'>
//         <FriendsList
//           initialFriends={friends}
//           selectedFriend={selectedFriend}
//           setSelectedFriend={setSelectedFriend}
//         />
//         {isOpenForm && (
//           <FormAddFriend setFriends={setFriends} formIsOpen={setIsOpenForm} />
//         )}
//         <Button click={() => setIsOpenForm((prev) => !prev)}>
//           {isOpenForm ? 'Close' : 'Add Friend'}
//         </Button>
//       </div>
//       {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
//     </div>
//   );
// }

//---------------------------------------------------------------------------
// function numberOfIslands(grid) {
//   if (!grid || grid.length === 0) {
//     return 0;
//   }

//   const numRows = grid.length;
//   const numCols = grid[0].length;
//   let islandCount = 0;

//   function DepthFirstSearch(row, col) {
//     if (
//       row < 0 ||
//       row >= numRows ||
//       col < 0 ||
//       col >= numCols ||
//       grid[row][col] === '0'
//     ) {
//       return;
//     }

//     grid[row][col] = '0';

//     DepthFirstSearch(row + 1, col);
//     DepthFirstSearch(row - 1, col);
//     DepthFirstSearch(row, col + 1);
//     DepthFirstSearch(row, col - 1);
//   }

//   for (let row = 0; row < numRows; row++) {
//     for (let col = 0; col < numCols; col++) {
//       if (grid[row][col] === '1') {
//         islandCount++;
//         DepthFirstSearch(row, col);
//       }
//     }
//   }

//   return islandCount;
// }

// // Example 1:
// const grid1 = [
//   ['1', '1', '1', '1', '0'],
//   ['1', '1', '0', '1', '0'],
//   ['1', '1', '0', '0', '0'],
//   ['0', '0', '0', '0', '0'],
// ];
// console.log(numberOfIslands(grid1)); // Output: 1

// // Example 2:
// const grid2 = [
//   ['1', '1', '0', '0', '0'],
//   ['1', '1', '0', '0', '0'],
//   ['0', '0', '1', '0', '0'],
//   ['0', '0', '0', '1', '1'],
// ];
// console.log(numberOfIslands(grid2)); // Output: 3
//---------------------------------------------------------------------------
