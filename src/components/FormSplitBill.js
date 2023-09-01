import Button from './Button';

export default function FormSplitBill() {
  function formHandler(e) {
    e.preventDefault();
  }
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with</h2>

      <label>Bill value</label>
      <input type='text' />

      <label>Your expenses</label>
      <input type='text' />

      <label>X expenses</label>
      <input type='text' disabled />

      <label>Who is paying the bill</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>Friend</option>
      </select>

      <Button onClick={formHandler}>Split bill</Button>
    </form>
  );
}
