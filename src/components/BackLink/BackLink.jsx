import { StyledLink } from "./BackLink.styled";
import { BiArrowBack } from "react-icons/bi";

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <BiArrowBack />
      {children}
    </StyledLink>
  );
};

export default BackLink;
