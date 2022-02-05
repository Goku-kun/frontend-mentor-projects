import styled from "styled-components";

const Header = styled.h1`
  color: ${(props) => props.theme.color.heading};
  background: url("./images/pattern-bg.png");
  font-family: ${(props) => props.theme.fonts.primary};
  height: 30vh;
`;

export default Header;
