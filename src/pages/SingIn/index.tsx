import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Logo from '../../assets/logo.svg';
import Colors from '../../Configs/Colors';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SingIn: React.FC = () => {
  function handleLoginSubmit(data: void) {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <img src={Logo} alt="GoBarber" />

        <Form onSubmit={handleLoginSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha secreta..."
          />
          <Button type="submit">Entrar</Button>

          <Link to="/forgot">Esqueci minha senha</Link>
        </Form>
        <Link to="/singup">
          <FiLogIn size={20} color={Colors.button} />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SingIn;
