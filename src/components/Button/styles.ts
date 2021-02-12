import styled from 'styled-components';
import { shade } from 'polished';
import Colors from '../../Configs/Colors';

export const Container = styled.button`
  background: ${Colors.button};
  border-radius: 10px;
  border: 0;
  height: 56px;
  padding: 0 16px;
  width: 100%;
  color: ${Colors.background};
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, Colors.button)};
  }
`;

export const ButtonOpacity = styled.button``;
