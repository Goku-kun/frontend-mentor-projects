import styled from "styled-components";

const ResultHeader = styled.p`
  color: ${(props) => props.theme.color.secondary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.resultHeader};
`;

export default ResultHeader;
