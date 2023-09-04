import { useState } from 'react';
import Button from './Button';

export default function FormSplitBill({ onSplitBill, selectedFriend }) {
  const [billValue, setBillValue] = useState('');
  const [yourExpenses, setYourExpenses] = useState('');
  const paidByFriend = billValue ? billValue - yourExpenses : '';
  const [paysBill, setPaysBill] = useState('user');

  function formHandler(e) {
    e.preventDefault();

    if (!billValue || !yourExpenses || !selectedFriend) {
      return;
    }

    onSplitBill(paysBill === 'user' ? paidByFriend : -yourExpenses);
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
