import { useDispatch } from "react-redux";
import { changeUser } from "../redux/usersOperations";
export const Card = ({ avatar, tweets, followers, user, item }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <img src={avatar} alt={user} />
      <p>{tweets} Tweets</p>
      <p>{followers} Followers</p>
      <button onClick={() => dispatch(changeUser(item))}>Follow</button>
    </li>
  );
};
