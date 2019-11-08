import styled from 'styled-components';
import Container from '../../../container';

const Body = styled(Container)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
`;

export default Body;
