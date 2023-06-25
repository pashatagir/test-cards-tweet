import { Navlink } from 'components/Style/Style.styled';

export const Navigation = () => {
  return (
    <nav>
      <Navlink to="/">Home</Navlink>
      <Navlink to="/tweets">Tweets</Navlink>
    </nav>
  );
};
