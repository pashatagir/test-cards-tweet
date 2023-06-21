import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { selectUsers } from "../redux/usersSelectors";
import { fetchUsers } from "../redux/usersOperations";
import { useEffect } from "react";

export const ListCards = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectUsers);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <ul>
      {items.map((item) => (
        <Card
          key={item.id}
          avatar={item.avatar}
          tweets={item.tweets}
          followers={item.followers}
          user={item.user}
          id={item.id}
          item={item}
        />
      ))}
    </ul>
  );
};
