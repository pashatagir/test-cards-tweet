import { Card } from '../Card/Card';
import { List } from 'components/Style/Style.styled';

export const ListCards = ({ items }) => {
  return (
    <List>
      {items?.map(item => (
        <Card
          key={item.id}
          avatar={item.avatar}
          tweets={item.tweets}
          followers={item.followers}
          user={item.user}
          id={item.id}
          isFollower={item.isFollower}
        />
      ))}
    </List>
  );
};
