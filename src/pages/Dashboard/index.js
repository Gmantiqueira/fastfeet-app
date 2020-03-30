import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useDispatch, useSelector} from 'react-redux';

import {logout} from '@/store/modules/deliveryman/actions';

import {
  Avatar,
  Bold,
  Bottom,
  Card,
  CardTitle,
  Container,
  Details,
  DotWrapper,
  Greet,
  Header,
  InfoText,
  InfoTitle,
  InfoWrapper,
  Progress,
  ProgressDot,
  ProgressInfo,
  ProgressLine,
  Row,
  Tab,
  TitleWrapper,
  Top,
  TextWrapper,
} from './styles';

export default function Dashboard({navigation}) {
  const [activeTab, setActive] = useState(0);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  function details() {
    navigation.navigate('Details');
  }

  const {name, url} = useSelector(state => state.deliveryman.profile);

  return (
    <Container>
      <Header>
        <Row>
          <Avatar
            source={{
              uri:
                url ||
                'https://ui-avatars.com/api/?name=' +
                  (name ? name.split(' ').join('+') : 'John+Doe') +
                  '&background=0D8ABC&color=fff&size=68',
            }}
          />
          <TextWrapper>
            <Greet>Bem vindo de volta,</Greet>
            <Bold>{name}</Bold>
          </TextWrapper>
        </Row>
        <Icon
          onPress={handleLogout}
          name="exit-to-app"
          size={32}
          color="#E74040"
        />
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
          <Top>
            <TitleWrapper>
              <Icon color="#7d40e7" name="local-shipping" size={36} />
              <CardTitle>Encomenda 01</CardTitle>
            </TitleWrapper>
            <Progress>
              <DotWrapper>
                <ProgressLine />
                <ProgressDot filled />
                <ProgressDot filled />
                <ProgressDot />
              </DotWrapper>
              <InfoWrapper>
                <ProgressInfo>Aguardando retirada</ProgressInfo>
                <ProgressInfo>Retirada</ProgressInfo>
                <ProgressInfo>Entregue</ProgressInfo>
              </InfoWrapper>
            </Progress>
          </Top>
          <Bottom>
            <View>
              <InfoTitle>Data</InfoTitle>
              <InfoText>14/01/2020</InfoText>
            </View>

            <View>
              <InfoTitle>Cidade</InfoTitle>
              <InfoText>Diadema</InfoText>
            </View>
            <Details onPress={details}>Ver detalhes</Details>
          </Bottom>
        </Card>
      </View>
    </Container>
  );
}
