import { useDispatch } from "react-redux";
import { changeUser } from "../redux/usersOperations";
import { DecorLine, Item } from "../styles/Styles.styled";
export const Card = ({ avatar, tweets, followers, user, id, isFollower }) => {
  const dispatch = useDispatch();
  const oneUser = { avatar, tweets, user, id };

  const handlerClick = () => {
    if (!isFollower) {
      dispatch(
        changeUser({
          ...oneUser,
          followers: followers + 1,
          isFollower: true,
        })
      );
    } else {
      dispatch(
        changeUser({
          ...oneUser,
          followers: followers - 1,
          isFollower: false,
        })
      );
    }
  };
  const dataFollowersInString = (f) => {
    if (f.toString().length > 3) {
      return (
        f.toString().slice(0, f.toString().length - 3) +
        "," +
        f.toString().slice(f.toString().length - 3)
      );
    }
    return f.toString();
  };

  return (
    <Item>
      <DecorLine />
      <img src={avatar} alt={user} />
      <p>{tweets} Tweets</p>
      <p>{dataFollowersInString(followers)} Followers</p>
      <button onClick={handlerClick}>Follow</button>
    </Item>
  );
};
