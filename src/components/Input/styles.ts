import styled, { css } from 'styled-components';
import Colors from '../../Configs/Colors';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: ${Colors.inputs};
  border-radius: 10px;

  padding: 16px;
  width: 100%;

  border: 2px solid ${Colors.inputs};
  color: ${Colors.grayHard};

  ${props =>
    props.isFocused &&
    css`
      color: ${Colors.button};
      border-color: ${Colors.button};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${Colors.button};
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: ${Colors.white};
    &::placeholder {
      color: ${Colors.grayHard};
    }
  }
  & + div {
    margin-top: 8px;
  }
  svg {
    margin-right: 16px;
  }
`;

export const InputText = styled.input``;
