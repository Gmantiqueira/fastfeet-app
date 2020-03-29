import React from 'react';
import {Image} from 'react-native';

import Logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from './styles';

export default function SignIn({navigation}) {
  function handleLogin() {
    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Image source={Logo} />
      <Input
        placeholder="Informe seu ID de cadastro"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={handleLogin}
      />
      <Button
        style={{marginTop: 15.5, backgroundColor: '#82BF18'}}
        onPress={handleLogin}>
        Entrar no sistema
      </Button>
    </Background>
  );
}
