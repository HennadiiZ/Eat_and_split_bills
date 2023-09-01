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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList initialFriends={initialFriends} />
        {isOpen && <FormAddFriend />}
        <Button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
