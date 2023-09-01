import { useState } from 'react';
import initialFriends from './data/data';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';

// const initialFriends = [
//   {
//     id: 118836,
//     name: 'Clark',
//     image: 'https://i.pravatar.cc/48?u=118836',
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: 'Sarah',
//     image: 'https://i.pravatar.cc/48?u=933372',
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: 'Anthony',
//     image: 'https://i.pravatar.cc/48?u=499476',
//     balance: 0,
//   },
// ];

export default function App() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  console.log(friends);

  return (
    <div className='app'>
      <div className='sidebar'>
        {/* <FriendsList initialFriends={initialFriends} /> */}
        <FriendsList initialFriends={friends} />
        {isOpenForm && (
          <FormAddFriend setFriends={setFriends} formIsOpen={setIsOpenForm} />
        )}
        <Button click={() => setIsOpenForm((prev) => !prev)}>
          {isOpenForm ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
