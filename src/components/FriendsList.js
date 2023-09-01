import Friend from './Friend';
export default function FriendsList({ initialFriends }) {
  return (
    <ul>
      {initialFriends.map((item) => (
        <Friend item={item} key={item.id} />
      ))}
    </ul>
  );
}
