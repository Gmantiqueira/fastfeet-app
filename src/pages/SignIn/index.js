import React, {useState} from 'react';
import {Image} from 'react-native';

import Logo from '../../assets/logo.png';

import {useDispatch, useSelector} from 'react-redux';
import {loginRequest} from '@/store/modules/deliveryman/actions';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [id, setId] = useState('');

  function handleLogin() {
    setLoading(true);
    dispatch(loginRequest(id));
    setLoading(false);
  }

  return (
    <Background>
      <Image source={Logo} />
      <Input
        placeholder="Informe seu ID de cadastro"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="send"
        onSubmitEditing={handleLogin}
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
      <Button
        loading={loading}
        style={{marginTop: 15.5, backgroundColor: '#82BF18'}}
        onPress={handleLogin}>
        Entrar no sistema
      </Button>
    </Background>
  );
}
