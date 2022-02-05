import styled from "styled-components";

const Header = styled.h1`
  color: ${(props) => props.theme.color.heading};
  font-family: ${(props) => props.theme.fonts.primary};
  margin-top: -4rem;
`;

export default Header;
