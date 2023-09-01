import { useState } from 'react';
import Button from './Button';

export default function FormAddFriend({ setFriends, formIsOpen }) {
  const [friendsName, setFriendsName] = useState('');
  const [imageURL, setImageURL] = useState('');

  function formHandler(e) {
    e.preventDefault();

    const newPerson = {
      id: Math.random(),
      name: friendsName,
      image: imageURL,
      balance: 2000,
    };

    setFriends((prev) => [...prev, newPerson]);
    formIsOpen((prev) => !prev);
  }

  return (
    <form className='form-add-friend'>
      <label>friend name</label>
      <input
        type='text'
        value={friendsName}
        onChange={(e) => setFriendsName(e.target.value)}
      />

      <label>Image URL</label>
      <input
        type='text'
        value={imageURL}
        onChange={(e) => {
          console.log(imageURL);
          setImageURL(e.target.value);
        }}
      />

      <Button click={formHandler}>Add</Button>
    </form>
  );
}
