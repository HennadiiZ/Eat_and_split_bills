import { useState } from 'react';
import Button from './Button';

export default function FormAddFriend({ setFriends, formIsOpen }) {
  const [friendsName, setFriendsName] = useState('');
  const [imageURL, setImageURL] = useState('https://i.pravatar.cc/48');

  function formHandler(e) {
    e.preventDefault();

    if (!friendsName || !imageURL) {
      return;
    }

    const id = crypto.randomUUID();
    const newPerson = {
      // id: Math.random(),
      // id: crypto.randomUUID(),
      id,
      name: friendsName,
      // image: imageURL,
      image: `${imageURL}?=${id}`,
      balance: 0,
    };

    setFriends((prev) => [...prev, newPerson]);
    // formIsOpen((prev) => !prev);
    formIsOpen(false);

    setFriendsName('');
    setImageURL('https://i.pravatar.cc/48');
  }

  return (
    <form className='form-add-friend' onSubmit={formHandler}>
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

      {/* <Button click={formHandler}>Add</Button> */}
      <Button>Add</Button>
    </form>
  );
}
