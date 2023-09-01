import Button from './Button';

export default function FormAddFriend() {
  function formHandler(e) {
    e.preventDefault();
  }

  return (
    <form className='form-add-friend'>
      <label>friend name</label>
      <input type='text' />

      <label>Image URL</label>
      <input type='text' />

      <Button onClick={formHandler}>Select</Button>
    </form>
  );
}
