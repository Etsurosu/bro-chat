import styled from 'styled-components';
import Container from '../../../container';

const CoreContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.default.primaryColor};
`;

export default CoreContainer;
