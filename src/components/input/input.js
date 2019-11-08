import styled from 'styled-components';

const Input = styled.input`
  width: calc(100% - 24px);
  height: 30px;
  border: 2px solid ${props => props.theme.border};
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  color: ${props => props.color};
  background-color: ${props => props.theme.primaryBackground}
  margin-right: ${props => (props.spaced && 10) || 0}px;
  margin-left: ${props => (props.spaced && 10) || 0}px;
  :focus {
    outline: none;
  }
`;

export default Input;
