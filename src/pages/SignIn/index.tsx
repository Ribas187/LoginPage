import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Alert, Animated } from 'react-native';
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
  SignUpArea,
  SignUpText,
  SignUpButton,
  SignUpButtonText,
} from './styles';

const SignIn: React.FC = () => {
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

  const handleGoToSignUp = (): void => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon name="arrow-left" color="#fff" size={35} />
        </BackButton>

        <Title>Entrar</Title>
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
          <WelcomeText>Bem vindo de volta</WelcomeText>
          <SubText>Olá, entre para continuar</SubText>
        </TextArea>

        <Form>
          <InputArea>
            <InputLabel>Usuário ou email</InputLabel>
            <Input placeholder="Insira seu usuário ou email" />
          </InputArea>

          <InputArea>
            <InputLabel>Senha</InputLabel>
            <Input placeholder="Insira sua senha" secureTextEntry />
          </InputArea>

          <ForgotPasswordButton onPress={() => Alert.alert('Esqueci a senha')}>
            <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
          </ForgotPasswordButton>

          <Button>Entrar</Button>
        </Form>

        <SignUpArea>
          <SignUpText>Não possui uma conta? </SignUpText>
          <SignUpButton onPress={handleGoToSignUp}>
            <SignUpButtonText>Cadastre-se</SignUpButtonText>
          </SignUpButton>
        </SignUpArea>
      </Content>
    </Container>
  );
};

export default SignIn;
