import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, TextInput } from './styles';

type InputProps = TextInputProps;

const Input: React.FC<InputProps> = props => {
  const { ...rest } = props;

  const [value, setValue] = useState('');

  return (
    <Container>
      <TextInput {...rest} onChangeText={e => setValue(e)} />

      {value.length > 0 && (
        <Icon
          name="check-circle"
          color="#00B3F3"
          size={20}
          style={{ position: 'absolute', right: 14 }}
        />
      )}
    </Container>
  );
};

export default Input;
