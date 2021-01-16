import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ContainerProps {
  light?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;

  border-radius: 18px;
  border: ${props => (props.light ? 'none' : '1px solid #fff;')};
`;

export const ButtonElement = styled(RectButton)<ContainerProps>`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  flex: 1;

  padding: 14px 10px;

  background: ${props => (props.light ? '#fff' : '#0041c4')};

  border-radius: 18px;
`;

export const ButtonText = styled.Text<ContainerProps>`
  font-weight: bold;
  font-size: 16px;

  color: ${props => (props.light ? '#0041c4' : '#fff')};
`;
