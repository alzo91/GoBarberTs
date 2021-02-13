import React, { useRef, useCallback, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Container, Content, Background } from './styles';
import Logo from '../../assets/logo.svg';
import Colors from '../../Configs/Colors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import { AuthContext } from '../../hooks/AuthContext';

interface FormCredentials {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useContext(AuthContext);

  const handleLoginSubmit = useCallback(async (data: FormCredentials) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Senha no minimo de 6 caracteres'),
      });
      await schema.validate(data, { abortEarly: false });
      signIn({ email: data.email, password: data.password });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={Logo} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleLoginSubmit}>
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
