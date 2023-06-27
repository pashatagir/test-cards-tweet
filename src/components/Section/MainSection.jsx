import { LoadMoreBtn } from 'components/Buttons/Buttons';
import { StatusFilter } from 'components/Filters/Filters';
import { ListCards } from 'components/ListCards/ListCards';
import { Loader } from 'components/Loader/Loader';
import {
  ButtonFilters,
  CardsContainer,
  Navlink,
  SectionContainer,
  Warning,
  WrapperBtnFilter,
} from 'components/Style/Style.styled';
import { statusFilters } from 'helpers/statusFilters';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchUsers } from 'redux/usersOperations';
import {
  selectPagination,
  selectState,
  selectVisibleUsers,
} from 'redux/usersSelectors';
import { setPagination } from 'redux/usersSlice';

export const MainSection = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const users = useSelector(selectVisibleUsers);

  const { isLoading, error, items } = useSelector(selectState);
  const { page, limit } = useSelector(selectPagination);

  const [showBtn, setShowBtn] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers({ page, limit }));
  }, [dispatch, page, limit]);

  const onLoadMore = () => {
    dispatch(setPagination({ page, limit: limit + 3 }));
    console.log('filteredUsers:', filteredUsers.length);
    console.log('items:', items.length);
    console.log('limit:', limit);
    if (limit > items.length) {
      setShowBtn(false);
    }
  };

  const onSelectFilter = (users, filter) => {
    switch (filter) {
      case statusFilters.follow:
        return users.filter(user => !user.isFollower);
      case statusFilters.following:
        return users.filter(user => user.isFollower);
      default:
        return users;
    }
  };

  const filteredUsers = onSelectFilter(users);

  const goBackLink = location?.state?.from ?? '/';

  return (
    <>
      <Navlink to={goBackLink}>Go back</Navlink>
      <ButtonFilters onClick={() => setIsFilterOpen(!isFilterOpen)}>
        Filters
        <WrapperBtnFilter>{isFilterOpen && <StatusFilter />}</WrapperBtnFilter>
      </ButtonFilters>
      <SectionContainer>
        <CardsContainer>
          {isLoading && !error && <Loader />}
          <ListCards items={filteredUsers} />
          {isLoading && <Loader />}
        </CardsContainer>
        {showBtn ? (
          <LoadMoreBtn onClick={onLoadMore} />
        ) : (
          <Warning>Sorry this is the end!</Warning>
        )}
      </SectionContainer>
    </>
  );
};
