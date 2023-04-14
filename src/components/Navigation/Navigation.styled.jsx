import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  color: black;
  margin: 10px;
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: red;
  }
`;
