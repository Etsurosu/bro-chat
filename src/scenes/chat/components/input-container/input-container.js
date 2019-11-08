import styled from 'styled-components';
import Container from '../../../../components/container';

const InputContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.chatInputContainerBackground};
  padding: 7px 20px 7px 20px;
`;

export default InputContainer;
