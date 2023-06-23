import { useSelector } from "react-redux";
import { selectUsers } from "./redux/usersSelectors";
import { ListCards } from "./components/ListCards";
import { UsersContainer } from "./styles/Styles.styled";
export const App = () => {
  const { isLoading, error } = useSelector(selectUsers);
  return (
    <UsersContainer>
      {isLoading && !error && <b>Request in progress...</b>}
      <ListCards />
    </UsersContainer>
  );
};
