import PacmanLoader from "react-spinners/PacmanLoader";
import { LoaderContainer } from "../styles/Styles.styled";

export const Loader = () => (
  <LoaderContainer>
    <PacmanLoader color="#f7f507" size="50px" />
  </LoaderContainer>
);
