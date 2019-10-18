import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 2px solid #666666;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  color: ${props => props.color};
  margin-right: ${props => (props.spaced && 10) || 0}px;
  margin-left: ${props => (props.spaced && 10) || 0}px;
  :focus {
    outline: none;
  }
`;

export default Input;
