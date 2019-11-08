import styled from 'styled-components';
import Container from '../../../container';

const ContentPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.quaternaryColor};
  border-radius: 30px;
  border: 2px solid ${props => props.theme.tertiaryColor}
  overflow: hidden;
  color: ${props => props.theme.secondaryColor};
`;

export default ContentPageContainer;
