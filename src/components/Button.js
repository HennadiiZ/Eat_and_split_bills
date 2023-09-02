// export default function Button({ click, selectAfriend, children }) {
//   function handleClick() {
//     if (click) {
//       console.log('click');
//       click();
//     }
//     if (selectAfriend) {
//       console.log('click2');
//       selectAfriend();
//     }
//   }

//   return (
//     <button className='button' onClick={handleClick}>
//       {children}
//     </button>
//   );
// }

// export default function Button({ click, toggleFriend, children }) {
//   function handleClick() {
//     if (click) {
//       // console.log('click');
//       click();
//     }
//     if (toggleFriend) {
//       // click();
//       console.log('click');
//       toggleFriend();
//     }
//   }

//   return (
//     <button className='button' onClick={handleClick}>
//       {children}
//     </button>
//   );
// }

export default function Button({ click, children }) {
  return (
    <button className='button' onClick={click}>
      {children}
    </button>
  );
}
