import { useState } from 'react';
import Button from './Button';

export default function FormSplitBill({ selectedFriend }) {
  const [billValue, setBillValue] = useState('');
  const [yourExpenses, setYourExpenses] = useState('');
  const [friendExpenses, setFriendExpenses] = useState('');
  const [paysBill, setPaysBill] = useState('');

  function formHandler(e) {
    e.preventDefault();
    console.log('!');
  }

  return (
    <form className='form-split-bill' onSubmit={formHandler}>
      <h2>Split a bill with {selectedFriend?.name}</h2>

      <label>Bill value</label>
      <input
        type='text'
        value={billValue}
        onChange={(e) => {
          console.log(billValue);
          setBillValue(e.target.value);
        }}
      />

      <label>Your expenses</label>
      <input
        type='text'
        value={yourExpenses}
        onChange={(e) => {
          setYourExpenses(e.target.value);
        }}
      />

      <label>{selectedFriend?.name} expenses</label>
      <input
        type='text'
        value={friendExpenses}
        onChange={(e) => {
          setFriendExpenses(e.target.value);
        }}
        disabled
      />

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
