import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import CardLogo from '../../image/CardLogo.png';
import TopCard from '../../image/TopCard.png';

// Home
export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 5px #5736a3;
  font-weight: 600;
  font-size: 42px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// UserMenu
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// AppBar
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
export const Item = styled.li`
  width: 380px;
  height: 460px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background: url(${CardLogo}) 20px 20px no-repeat, url(${TopCard}) center 28px,
    linear-gradient(
      114.99deg,
      rgb(71, 28, 169) -0.99%,
      rgb(87, 54, 163) 54.28%,
      rgb(75, 42, 153) 78.99%
    );
  background-repeat: no-repeat;
  border-radius: 20px;
`;

export const DecorLine = styled.div`
  position: relative;
  width: 380px;
  height: 8px;
  top: 46%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

export const AvatarWrap = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  background-color: #ebd8ff;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 62px;
  transform: translateX(-50%);
  color: #ebd8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
`;

export const Followers = styled.p`
  margin-bottom: 26px;
`;

export const ButtonFollows = styled.button`
  width: 196px;
  padding: 16px 0px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: ${({ bgColor }) =>
    bgColor === false ? '#EBD8FF' : '#5CD3A8'};
  border: none;
  cursor: pointer;
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
`;

export const Warning = styled.h3`
  padding: 16px 10px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: #ff9900;
`;

export const Navlink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #5736a3;
  text-shadow: 2px 2px 5px #ffffff;
  &.active {
    color: #ffffff;
    text-shadow: 2px 2px 5px #000000;
  }
  &:hover {
    color: #ffffff;
    text-shadow: 2px 2px 5px #000000;
  }
`;

export const ButtonFilters = styled.button`
  background-color: transparent;
  border: none;
  padding: 12px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #5736a3;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    text-shadow: 2px 2px 5px #000000;
  }
`;

export const BtnFilter = styled.button`
  background-color: transparent;
  border: none;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #5736a3;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    text-shadow: 2px 2px 5px #000000;
  }
`;
