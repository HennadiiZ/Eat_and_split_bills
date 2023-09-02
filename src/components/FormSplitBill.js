import Button from './Button';

export default function FormSplitBill({ selectedFriend }) {
  function formHandler(e) {
    e.preventDefault();
  }
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with {selectedFriend?.name}</h2>

      <label>Bill value</label>
      <input type='text' />

      <label>Your expenses</label>
      <input type='text' />

      <label>{selectedFriend?.name} expenses</label>
      <input type='text' disabled />

      <label>Who is paying the bill</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend?.name}</option>
      </select>

      <Button onClick={formHandler}>Split bill</Button>
    </form>
  );
}
