import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/usersOperations";
import { getUsers } from "./redux/usersSelectors";
import { ListCards } from "./components/ListCards";
export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getUsers);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <section>
      {isLoading && !error && <b>Request in progress...</b>}
      <ListCards users={items} />
    </section>
  );
};
