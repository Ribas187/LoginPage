import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Header,
  BackButton,
  Title,
  Content,
  TextArea,
  WelcomeText,
  SubText,
  Form,
  InputArea,
  InputLabel,
  ForgotPasswordButton,
  ForgotPasswordText,
  SignInArea,
  SignInText,
  SignInButton,
  SignInButtonText,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const slideContentAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      slideContentAnim.setValue(0);

      Animated.parallel([
        Animated.timing(slideContentAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();
    });

    return unsubscribe;
  }, [navigation, slideContentAnim]);

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  const handleGoToSignIn = (): void => {
    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon name="arrow-left" color="#fff" size={35} />
        </BackButton>

        <Title>Cadastrar</Title>
      </Header>

      <Content
        style={{
          transform: [
            {
              translateY: slideContentAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [600, 0],
              }),
            },
          ],
        }}
      >
        <TextArea>
          <WelcomeText>Seja bem vindo</WelcomeText>
          <SubText>Olá, cadastre-se para continuar</SubText>
        </TextArea>

        <Form>
          <InputArea>
            <InputLabel>Nome</InputLabel>
            <Input placeholder="Insira seu nome completo" />
          </InputArea>

          <InputArea>
            <InputLabel>Usuário</InputLabel>
            <Input placeholder="Insira seu usuário" />
          </InputArea>

          <InputArea>
            <InputLabel>Senha</InputLabel>
            <Input placeholder="Insira sua senha" secureTextEntry />
          </InputArea>

          <Button style={{ marginTop: 20 }} onPress={handleGoBack}>
            Criar conta
          </Button>
        </Form>

        <SignInArea>
          <SignInText>Já possui uma conta? </SignInText>
          <SignInButton onPress={handleGoToSignIn}>
            <SignInButtonText>Entrar</SignInButtonText>
          </SignInButton>
        </SignInArea>
      </Content>
    </Container>
  );
};

export default SignUp;
