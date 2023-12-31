import { useDispatch } from 'react-redux';
import { changeUser } from '../../redux/usersOperations';
import {
  Avatar,
  AvatarWrap,
  ButtonFollows,
  DecorLine,
  Followers,
  InfoWrapper,
  Item,
  Tweets,
} from 'components/Style/Style.styled';
import { dataFollowersInString } from '../../helpers/dataFollowersInString';

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

  return (
    <Item>
      <DecorLine>
        <AvatarWrap>
          <Avatar src={avatar} alt={user} />
        </AvatarWrap>
        <InfoWrapper>
          <Tweets>{tweets} Tweets</Tweets>
          <Followers>{dataFollowersInString(followers)} Followers</Followers>
          <ButtonFollows
            type="button"
            onClick={handlerClick}
            bgColor={isFollower}
          >
            {!isFollower ? 'Follow' : 'Following'}
          </ButtonFollows>
        </InfoWrapper>
      </DecorLine>
    </Item>
  );
};
