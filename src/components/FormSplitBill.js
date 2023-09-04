import { useState } from 'react';
import Button from './Button';

export default function FormSplitBill({ selectedFriend, friends, setFriends }) {
  const [billValue, setBillValue] = useState('');
  const [yourExpenses, setYourExpenses] = useState('');
  // const [friendExpenses, setFriendExpenses] = useState(''); //
  const paidByFriend = billValue ? billValue - yourExpenses : '';
  const [paysBill, setPaysBill] = useState('user');

  // function formHandler(e) {
  //   e.preventDefault();

  //   if (!billValue || !yourExpenses) {
  //     return;
  //   }
  // }

  function formHandler(e) {
    e.preventDefault();

    if (!billValue || !yourExpenses || !selectedFriend) {
      return;
    }

    const updatedFriends = friends.map((friend) => {
      if (friend.id === selectedFriend.id) {
        return {
          ...friend,
          balance: friend.balance + parseFloat(paidByFriend), // Assuming paidByFriend is a number
        };
      } else {
        return friend;
      }
    });

    // Now, update the 'friends' state with the new array of friends
    setFriends(updatedFriends);

    // Reset form fields or perform any other necessary actions
    // Example: setPaidByFriend('');
  }

  return (
    <form className='form-split-bill' onSubmit={formHandler}>
      <h2>Split a bill with {selectedFriend?.name}</h2>

      <label>Bill value</label>
      <input
        type='number'
        value={billValue}
        onChange={(e) => {
          setBillValue(+e.target.value);
        }}
      />

      <label>Your expenses</label>
      <input
        type='number'
        value={yourExpenses}
        onChange={(e) => {
          setYourExpenses(
            +e.target.value > billValue ? yourExpenses : +e.target.value
          );
        }}
      />

      <label>{selectedFriend?.name}'s expenses</label>
      <input type='number' value={paidByFriend} disabled />

      <label>Who is paying the bill</label>
      <select
        value={paysBill}
        onChange={(e) => {
          setPaysBill(e.target.value);
        }}
      >
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend?.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
