import styled from "@emotion/styled";
import CardLogo from "../image/CardLogo.png";
import TopCard from "../image/TopCard.png";
export const UsersContainer = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 168px;
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
  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
