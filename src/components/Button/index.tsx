import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonElement, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  iconName?: string;
  light?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  const { iconName, light, children, ...rest } = props;

  return (
    <Container light={light}>
      <ButtonElement {...rest} light={light}>
        {iconName && (
          <Icon
            name={iconName}
            color={light ? '#0041c4' : '#fff'}
            style={{ position: 'absolute', left: 20 }}
            size={20}
          />
        )}
        <ButtonText light={light}>{children}</ButtonText>
      </ButtonElement>
    </Container>
  );
};

export default Button;
