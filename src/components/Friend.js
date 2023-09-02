import Button from './Button';

export default function Friend({ item, selectedFriend, selectAfriendHandler }) {
  const isSelected = selectedFriend?.id === item?.id;

  //   const toggleFriend = () => {
  //     if (isSelected) {
  //       // If it's already selected, close it
  //       selectAfriendHandler(null); // Pass null to close the selected friend
  //     } else {
  //       // If it's not selected, select it
  //       selectAfriendHandler(item.id);
  //     }
  //   };

  return (
    <li>
      <img src={item.image} alt={item.name}></img>
      <h3>{item.name}</h3>

      {item.balance < 0 && (
        <p className='red'>
          You owe {item.name} ${Math.abs(item.balance)}
        </p>
      )}
      {item.balance > 0 && (
        <p className='green'>
          {item.name} owes you ${Math.abs(item.balance)}
        </p>
      )}
      {item.balance === 0 && <p>You and {item.name} are even</p>}
      <Button click={() => selectAfriendHandler(item.id)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}

// export default function Friend({ item, selectedFriend, selectAfriendHandler }) {

//   };
//   return (
//     <li>
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
//         {selectedFriend?.id === item?.id ? 'Close' : 'Select'}
//       </Button>
//     </li>
//   );
// }
