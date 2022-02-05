import styled from "styled-components";

const ResultValue = styled.div`
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.result};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export default ResultValue;
