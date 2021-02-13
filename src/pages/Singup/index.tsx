import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Container, Content, Background } from './styles';
import Logo from '../../assets/logo.svg';
import Colors from '../../Configs/Colors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

const SingUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Senha no minimo de 6 caracteres'),
      });
      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      // console.log(JSON.stringify(err));
      // formRef.current?.setErrors({ name: 'nome obrigatorio' });
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="GoBarber" />

        <Form
          ref={formRef}
          // initialData={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
        >
          <h1>Faça seu Cadastro</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha ..."
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft size={20} color={Colors.white} />
          Voltar para login
        </Link>
      </Content>
    </Container>
  );
};

export default SingUp;
