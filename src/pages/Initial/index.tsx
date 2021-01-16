import React, { useEffect, useRef } from 'react';

import { Alert, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

import loginImg from '../../assets/images/login.png';

import {
  Container,
  LoginImage,
  TextArea,
  WelcomeText,
  AccessText,
  DescriptionText,
  ButtonsArea,
  LoginArea,
  LoginText,
  LoginButton,
  LoginButtonText,
} from './styles';

const Initial: React.FC = () => {
  const navigation = useNavigation();

  const fadeTextAnim = useRef(new Animated.Value(0)).current;
  const slideInGoogleAnim = useRef(new Animated.Value(0)).current;
  const slideInSignUpAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fadeTextAnim.setValue(0);
      slideInGoogleAnim.setValue(0);
      slideInSignUpAnim.setValue(0);

      Animated.parallel([
        Animated.timing(fadeTextAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(slideInGoogleAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(slideInSignUpAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    });

    return unsubscribe;
  }, [fadeTextAnim, navigation, slideInGoogleAnim, slideInSignUpAnim]);

  const handleGoToSignIn = (): void => {
    navigation.navigate('SignIn');
  };

  const handleGoToSignUp = (): void => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <LoginImage source={loginImg} resizeMode="contain" />

      <Animated.View style={{ opacity: fadeTextAnim }}>
        <TextArea>
          <WelcomeText>Bem vindo</WelcomeText>

          <AccessText>Acesse nosso app</AccessText>
          <DescriptionText>Simples & Intuitivo</DescriptionText>
        </TextArea>
      </Animated.View>

      <ButtonsArea>
        <Animated.View
          style={{
            marginBottom: 15,
            transform: [
              {
                translateY: slideInGoogleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0],
                }),
              },
            ],
          }}
        >
          <Button
            light
            onPress={() => {
              Alert.alert(
                'Login com Google',
                'Faça o login com sua conta Google',
              );
            }}
            iconName="google"
          >
            Entrar com Google
          </Button>
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateY: slideInSignUpAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0],
                }),
              },
            ],
          }}
        >
          <Button onPress={handleGoToSignUp}>Criar conta</Button>
        </Animated.View>

        <Animated.View style={{ opacity: fadeTextAnim }}>
          <LoginArea>
            <LoginText>Já possui uma conta? </LoginText>
            <LoginButton onPress={handleGoToSignIn}>
              <LoginButtonText>Entrar</LoginButtonText>
            </LoginButton>
          </LoginArea>
        </Animated.View>
      </ButtonsArea>
    </Container>
  );
};

export default Initial;
