import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Avatar,
  Bold,
  Card,
  CardTitle,
  Container,
  Greet,
  Header,
  Row,
  Tab,
  TextWrapper,
} from './styles';

export default function Dashboard() {
  const [activeTab, setActive] = useState(0);

  return (
    <Container>
      <Header>
        <Row>
          <Avatar
            source={{
              uri:
                'https://ui-avatars.com/api/?name=Gabriel+Antiqueira&background=0D8ABC&color=fff&size=68',
            }}
          />
          <TextWrapper>
            <Greet>Bem vindo de volta,</Greet>
            <Bold>Gabriel Antiqueira</Bold>
          </TextWrapper>
        </Row>
        <Icon name="exit-to-app" size={32} color="#E74040" />
      </Header>

      <View>
        <Row style={{marginBottom: 10.5, justifyContent: 'space-between'}}>
          <Bold>Entregas</Bold>
          <Row>
            <Tab onPress={() => setActive(0)} active={activeTab === 0}>
              Pendentes
            </Tab>
            <Tab onPress={() => setActive(1)} active={activeTab === 1}>
              Entregues
            </Tab>
          </Row>
        </Row>
        <Card>
          <Row style={{alignItems: 'center'}}>
            <Icon color="#7d40e7" name="local-shipping" size={36} />
            <CardTitle>Encomenda 01</CardTitle>
          </Row>
        </Card>
      </View>
    </Container>
  );
}
