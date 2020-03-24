import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Card,
  CardDescription,
  CardDate,
  Container,
  Title,
  PurpleBackground,
  WhiteBackground,
} from './styles';

export default function Problems() {
  return (
    <WhiteBackground>
      <PurpleBackground />
      <Container>
        <Title>Encomenda 01</Title>
        <Card>
          <CardDescription>Destinatário ausente</CardDescription>
          <CardDate>14/01/2020</CardDate>
        </Card>
        <Card>
          <CardDescription>Destinatário ausente</CardDescription>
          <CardDate>14/01/2020</CardDate>
        </Card>
        <Card>
          <CardDescription>Destinatário ausente</CardDescription>
          <CardDate>14/01/2020</CardDate>
        </Card>
        <Card>
          <CardDescription>Destinatário ausente</CardDescription>
          <CardDate>14/01/2020</CardDate>
        </Card>
        <Card>
          <CardDescription>Destinatário ausente</CardDescription>
          <CardDate>14/01/2020</CardDate>
        </Card>
        <Card>
          <CardDescription>Destinatário ausente</CardDescription>
          <CardDate>14/01/2020</CardDate>
        </Card>
        <Card>
          <CardDescription>Destinatário ausente</CardDescription>
          <CardDate>14/01/2020</CardDate>
        </Card>
      </Container>
    </WhiteBackground>
  );
}
