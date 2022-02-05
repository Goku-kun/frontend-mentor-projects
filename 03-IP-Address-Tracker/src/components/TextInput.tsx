import styled from "styled-components";

const TextInput = styled.input`
  width: 30rem;
  padding: 0.5rem 0.5em;
  font-size: ${(props) => props.theme.fontSize.textInput};
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  font-family: ${(props) => props.theme.fonts.primary};
  border: none;
`;

export default TextInput;
