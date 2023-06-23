import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "./redux/usersSelectors";
import { ListCards } from "./components/ListCards";
import { CardsContainer, Section, Warning } from "./styles/Styles.styled";
import { useEffect, useState } from "react";
import { fetchUsers } from "./redux/usersOperations";
import { Loader } from "./components/Loader";
import { LoadMoreBtn } from "./components/LoadMoreBtn";

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error, limit, items } = useSelector(selectUsers);
  const [showBtn, setShowBtn] = useState(false);
  const [noOfElement, setNoOfElement] = useState(limit);
  const slice = items.slice(0, noOfElement);
  useEffect(() => {
    setShowBtn(true);
    dispatch(fetchUsers());
  }, [dispatch]);

  const onLoadMore = () => {
    setNoOfElement(noOfElement + 3);
    if (noOfElement > items.length - 6) {
      setShowBtn(false);
    }
  };
  return (
    <Section>
      <CardsContainer>
        {isLoading && !error && <Loader />}
        <ListCards items={slice} />
        {isLoading && <Loader />}
      </CardsContainer>
      {showBtn ? (
        <LoadMoreBtn onClick={onLoadMore} />
      ) : (
        <Warning>Sorry this is the end, such a technical task!</Warning>
      )}
    </Section>
  );
};
