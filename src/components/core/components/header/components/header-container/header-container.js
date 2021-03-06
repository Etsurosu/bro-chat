import styled from 'styled-components';
import Container from '../../../../../container';

const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100%;
  background-color: ${props => props.theme.tertiaryColor};
`;

export default HeaderContainer;
