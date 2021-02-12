import styled from 'styled-components';
import { shade } from 'polished';
import signInBbackground from '../../assets/sign-in-background.png';
import Colors from '../../Configs/Colors';

export const Container = styled.div`
  height: 100vh; //total da altura da tela do usuario
  display: flex;
  align-items: stretch; // faz com que os itens possuam o total ao maximo que pudere
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }

    a {
      color: ${Colors.white};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, Colors.white)};
      }
    }
  }
  > a {
    color: ${Colors.button};
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, Colors.button)};
    }
  }
`;

export const Background = styled.div`
  flex: 1; // vai ocupar todo o espaço menos os 700
  background: url(${signInBbackground}) no-repeat center;
  background-size: cover;
`;
