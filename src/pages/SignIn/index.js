import React from 'react';
import {Image} from 'react-native';

import Logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from './styles';

export default function SignIn({navigation}) {
  function loginAuth() {
    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Image source={Logo} />
      <Input
        style={{marginTop: 37.5}}
        placeholder="Informe seu ID de cadastro"
      />
      <Button
        style={{marginTop: 15.5, backgroundColor: '#82BF18'}}
        onPress={loginAuth()}>
        Entrar no sistema
      </Button>
    </Background>
  );
}
