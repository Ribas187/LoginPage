import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;

  padding: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px 30px 30px;

  background: #0041c4;
`;

export const LoginImage = styled.Image`
  width: auto;
  height: 300px;
`;

export const TextArea = styled.View``;

export const WelcomeText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 32px;
`;

export const AccessText = styled.Text`
  margin-top: 20px;

  color: #fff;
  font-size: 18px;
`;

export const DescriptionText = styled.Text`
  margin-top: 8px;

  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const ButtonsArea = styled.View``;

export const LoginArea = styled.View`
  margin-top: 20px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LoginButton = styled(RectButton)``;

export const LoginText = styled.Text`
  color: #ccc;
`;

export const LoginButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
