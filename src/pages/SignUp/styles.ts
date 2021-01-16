import { Animated, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px 0px 0px;

  background: #0041c4;
`;

export const Header = styled.View`
  flex-direction: column;
  padding: 35px 25px 40px;
`;

export const BackButton = styled(RectButton)``;

export const Title = styled.Text`
  margin-top: 20px;

  font-weight: bold;
  font-size: 25px;
  color: #fff;
`;

export const Content = styled(Animated.ScrollView)`
  flex: 1;
  background: #fff;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 35px;
`;

export const TextArea = styled.View``;

export const WelcomeText = styled.Text`
  font-weight: bold;
  font-size: 25px;
`;

export const SubText = styled.Text`
  margin-top: 5px;
  color: #919bab;
  font-size: 14px;
`;

export const Form = styled.View`
  margin: 20px 0;
`;

export const InputArea = styled.View`
  margin: 20px 0 0 0;
`;

export const InputLabel = styled.Text`
  color: #b7bfc9;
`;

export const ForgotPasswordButton = styled(RectButton)`
  margin-bottom: 20px;
`;

export const ForgotPasswordText = styled.Text`
  color: #0041c4;
  font-weight: bold;
`;

export const SignInArea = styled.View`
  margin-top: auto;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const SignInButton = styled(RectButton)``;

export const SignInText = styled.Text`
  color: #919bab;
`;

export const SignInButtonText = styled.Text`
  font-weight: bold;
  color: #0041c4;
`;
