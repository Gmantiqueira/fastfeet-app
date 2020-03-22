import React from 'react';
import {Text, View} from 'react-native';

import {Avatar, Container, Field, InputInfo, Label} from './styles';
import Button from '../../components/Button';

export default function Profile() {
  function logout() {
    console.log('logout');
  }
  return (
    <Container>
      <Avatar
        source={{
          uri:
            'https://ui-avatars.com/api/?name=Gabriel+Antiqueira&background=0D8ABC&color=fff&size=68',
        }}
      />
      <Field>
        <Label>Nome completo</Label>
        <InputInfo>Gabriel Antiqueira</InputInfo>
      </Field>
      <Field>
        <Label>Email</Label>
        <InputInfo>gmantiqueira@gmail.com</InputInfo>
      </Field>
      <Field>
        <Label>Data de cadastro</Label>
        <InputInfo>22/03/2020</InputInfo>
      </Field>
      <Button
        style={{marginTop: 15, backgroundColor: '#E74040'}}
        onPress={logout}>
        Logout
      </Button>
    </Container>
  );
}
