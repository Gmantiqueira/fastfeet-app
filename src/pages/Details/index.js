import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Action,
  ActionInfo,
  Actions,
  Card,
  CardTitle,
  Container,
  Field,
  FieldInfo,
  Label,
  PurpleBackground,
  Row,
  WhiteBackground,
} from './styles';

export default function Details({navigation}) {
  function reportProblem() {
    navigation.navigate('Report');
  }
  function viewProblems() {
    navigation.navigate('Problems');
  }
  function finishDelivery() {
    navigation.navigate('Finish');
  }

  return (
    <WhiteBackground>
      <PurpleBackground />
      <Container>
        <Card>
          <Row style={{marginBottom: 6}}>
            <Icon color="#7d40e7" name="local-shipping" size={24} />
            <CardTitle>Informações da entrega</CardTitle>
          </Row>
          <Row>
            <Field>
              <Label>Destinatário</Label>
              <FieldInfo>Gabriel Antiqueira</FieldInfo>
            </Field>
          </Row>
          <Row>
            <Field>
              <Label>Endereço de entrega</Label>
              <FieldInfo>
                Rua Beethoven, 1729, Diadema - SP, 09960-580
              </FieldInfo>
            </Field>
          </Row>
          <Row>
            <Field>
              <Label>Produto</Label>
              <FieldInfo>Yamaha SX7</FieldInfo>
            </Field>
          </Row>
        </Card>
        <Card>
          <Row style={{marginBottom: 6}}>
            <Icon color="#7d40e7" name="event" size={24} />
            <CardTitle>Situação da entrega</CardTitle>
          </Row>
          <Row>
            <Field>
              <Label>Status</Label>
              <FieldInfo>Pendente</FieldInfo>
            </Field>
          </Row>
          <Row justifyContent="space-between">
            <Field>
              <Label>Data de retirada</Label>
              <FieldInfo>14 / 01 /2020</FieldInfo>
            </Field>
            <Field>
              <Label>Data de entrega</Label>
              <FieldInfo>-- / -- / ----</FieldInfo>
            </Field>
          </Row>
        </Card>
        <Actions>
          <Action onPress={reportProblem}>
            <Icon color="#E74040" name="highlight-off" size={24} />
            <ActionInfo>Informar{'\n'}problema</ActionInfo>
          </Action>
          <Action onPress={viewProblems}>
            <Icon color="#E7BA40" name="info-outline" size={24} />
            <ActionInfo>Visualizar{'\n'}problemas</ActionInfo>
          </Action>
          <Action onPress={finishDelivery}>
            <Icon color="#7D40E7" name="alarm-on" size={24} />
            <ActionInfo>Confirmar{'\n'}entrega</ActionInfo>
          </Action>
        </Actions>
      </Container>
    </WhiteBackground>
  );
}
