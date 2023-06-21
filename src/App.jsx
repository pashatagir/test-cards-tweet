import { useSelector } from "react-redux";
import { selectUsers } from "./redux/usersSelectors";
import { ListCards } from "./components/ListCards";
export const App = () => {
  const { isLoading, error } = useSelector(selectUsers);
  return (
    <section>
      {isLoading && !error && <b>Request in progress...</b>}
      <ListCards />
    </section>
  );
};
