import styled from 'styled-components';
import Container from '../../../../components/container';

const MessageContainer = styled(Container)`
  width: fit-content;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 12px;
  margin: 1px;
  word-wrap: break-word;
  background-color: ${props => props.theme.quaternaryColor};
  color: ${props => props.color};
`;

export default MessageContainer;
