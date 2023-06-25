import { Container, Title } from 'components/Style/Style.styled';
import { GiNestBirds } from 'react-icons/gi';

const Home = () => {
  return (
    <Container>
      <Title>
        Your tweetbook welcome page!
        <GiNestBirds
          style={{
            width: '320px',
            height: '320px',
            fill: '#5736a3',
            marginTop: 50,
          }}
        />
      </Title>
    </Container>
  );
};

export default Home;
