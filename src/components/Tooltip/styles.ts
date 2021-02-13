import styled from 'styled-components';
import Colors from '../../Configs/Colors';

export const Container = styled.div`
  position: relative;
  span {
    width: 160px;
    background-color: ${Colors.button};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: ${Colors.background};
    visibility: hidden;

    &::before {
      content: '';
      border-style: solid;
      border-color: ${Colors.button} transparent;
      border-width: 6px 6px 0px 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

export const Label = styled.label``;
