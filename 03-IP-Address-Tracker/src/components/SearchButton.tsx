import styled from "styled-components";

const SearchButton = styled.button`
  padding: 1rem 1.5rem;
  background-color: ${(props) => props.theme.color.text};
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: none;
`;

export default SearchButton;
