import styled from "styled-components";
import Container from "../../../../components/container";

const OutputContainer = styled(Container)`
  display: flex;
  flex-direction: column-reverse;
  background-color: #e8e8e8;
  height: 100%;
  padding: 10px;
  overflow: scroll;
  overflow-x: hidden;
  margin-right: -17px;
`;

export default OutputContainer;
