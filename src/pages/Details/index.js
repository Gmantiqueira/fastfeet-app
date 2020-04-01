import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {format} from 'date-fns';

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

export default function Details({route, navigation}) {
  const delivery = route.params;

  function reportProblem() {
    navigation.navigate('Report');
  }
  function viewProblems() {
    navigation.navigate('Problems', delivery.id);
  }
  function withdrawDelivery() {
    Alert.alert(
      'Retirada',
      'Deseja confirmar a retirada da entrega?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => console.log('Dispatch da entrega')},
      ],
      {cancelable: false},
    );
  }
  function finishDelivery() {
    navigation.navigate('Finish');
  }

  let type = 'Pendente';
  if (delivery.start_date) {
    type = 'Retirada';
  }
  if (delivery.signature) {
    type = 'Entregue';
  }
  if (delivery.canceled_at) {
    type = 'Cancelada';
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
              <FieldInfo>{delivery.recipient.name}</FieldInfo>
            </Field>
          </Row>
          <Row>
            <Field>
              <Label>Endereço de entrega</Label>
              <FieldInfo>
                {`${delivery.recipient.street}, ${delivery.recipient.number}, ${delivery.recipient.city} - ${delivery.recipient.state}, ${delivery.recipient.zip_code}`}
              </FieldInfo>
            </Field>
          </Row>
          <Row>
            <Field>
              <Label>Produto</Label>
              <FieldInfo>{delivery.product}</FieldInfo>
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
              <FieldInfo>{type}</FieldInfo>
            </Field>
          </Row>
          <Row justifyContent="space-between">
            <Field>
              <Label>Data de retirada</Label>
              <FieldInfo>
                {delivery.start_date
                  ? format(new Date(delivery.start_date), 'dd/MM/yyyy')
                  : '-- / -- / ----'}
              </FieldInfo>
            </Field>
            <Field>
              <Label>Data de entrega</Label>
              <FieldInfo>
                {delivery.end_date
                  ? format(new Date(delivery.end_date), 'dd/MM/yyyy')
                  : '-- / -- / ----'}
              </FieldInfo>
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
          {delivery.start_date && !delivery.end_date ? (
            <Action onPress={withdrawDelivery}>
              <Icon color="#7D40E7" name="local-shipping" size={24} />
              <ActionInfo>Retirar{'\n'}entrega</ActionInfo>
            </Action>
          ) : (
            <Action onPress={finishDelivery}>
              <Icon color="#7D40E7" name="alarm-on" size={24} />
              <ActionInfo>Confirmar{'\n'}entrega</ActionInfo>
            </Action>
          )}
        </Actions>
      </Container>
    </WhiteBackground>
  );
}
