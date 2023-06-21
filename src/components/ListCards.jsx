export const ListCards = ({ users }) => {
  return (
    <ul>
      {users.map(({ avatar, tweets, folowers, user, id }) => (
        <li key={id}>
          <img src={avatar} alt={user} />
          <p>{tweets} Tweets</p>
          <p>{folowers} Folowers</p>
          <button>Follow</button>
        </li>
      ))}
    </ul>
  );
};
