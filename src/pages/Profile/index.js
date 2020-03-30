import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {logout} from '@/store/modules/deliveryman/actions';

import {Avatar, Container, Field, InputInfo, Label} from './styles';
import Button from '../../components/Button';

import {format} from 'date-fns';

export default function Profile() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }

  const {name, email, url, created_at} = useSelector(
    state => state.deliveryman.profile,
  );

  return (
    <Container>
      <Avatar
        source={{
          uri:
            url ||
            'https://ui-avatars.com/api/?name=' +
              (name ? name.split(' ').join('+') : 'John+Doe') +
              '&background=0D8ABC&color=fff&size=68',
        }}
      />
      <Field>
        <Label>Nome completo</Label>
        <InputInfo>{name}</InputInfo>
      </Field>
      <Field>
        <Label>Email</Label>
        <InputInfo>{email}</InputInfo>
      </Field>
      <Field last>
        <Label>Data de cadastro</Label>
        <InputInfo>
          {created_at ? format(new Date(created_at), 'dd/MM/yyyy') : 'N/A'}
        </InputInfo>
      </Field>
      <Button style={{backgroundColor: '#E74040'}} onPress={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}
