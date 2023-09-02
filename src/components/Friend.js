import Button from './Button';

export default function Friend({ item, selectedFriend, selectAfriendHandler }) {
  const isSelected = selectedFriend?.id === item?.id;

  return (
    <li>
      <img src={item.image} alt={item.name}></img>
      <h3>{item.name}</h3>

      {item.balance < 0 && (
        <p className='red'>
          You owe {item.name} ${Math.abs(item.balance)}
        </p>
      )}
      {item.balance > 0 && (
        <p className='green'>
          {item.name} owes you ${Math.abs(item.balance)}
        </p>
      )}
      {item.balance === 0 && <p>You and {item.name} are even</p>}
      <Button click={() => selectAfriendHandler(item.id)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}
