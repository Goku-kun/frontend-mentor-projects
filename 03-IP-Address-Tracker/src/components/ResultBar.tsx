import styled from "styled-components";

const ResultBar = styled.div`
  width: 1px;
  background-color: ${(props) => props.theme.color.bar};
  height: 5rem;
  margin: auto 0;
`;

export default ResultBar;
