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

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          initialFriends={friends}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
        {isOpenForm && (
          <FormAddFriend setFriends={setFriends} formIsOpen={setIsOpenForm} />
        )}
        <Button click={() => setIsOpenForm((prev) => !prev)}>
          {isOpenForm ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}
