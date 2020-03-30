import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format} from 'date-fns';

import {useDispatch, useSelector} from 'react-redux';

import api from '@/services/api';
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

  const {id, name, url} = useSelector(state => state.deliveryman.profile);

  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadDeliveries() {
    setLoading(true);
    try {
      const {data} = await api.get(`deliveryman/${id}/deliveries`);

      setDeliveries(data);
      console.log(data);
      setLoading(false);
    } catch {
      Alert.alert(
        'Falha de requisição.',
        'Falha ao trazer as informações das encomendas.',
      );
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDeliveries();
  }, []);

  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }

  function details() {
    navigation.navigate('Details');
  }

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

        {deliveries.map(delivery => {
          return (
            <Card key={delivery.id}>
              <Top>
                <TitleWrapper>
                  <Icon color="#7d40e7" name="local-shipping" size={36} />
                  <CardTitle>Encomenda {delivery.id}</CardTitle>
                </TitleWrapper>
                <Progress>
                  <DotWrapper>
                    <ProgressLine />
                    <ProgressDot filled />
                    <ProgressDot filled={delivery.start_date} />
                    <ProgressDot filled={delivery.end_date} />
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
                  <InfoText>
                    {delivery.start_date
                      ? format(new Date(delivery.start_date), 'dd/MM/yyyy')
                      : 'N/A'}
                  </InfoText>
                </View>

                <View>
                  <InfoTitle>Cidade</InfoTitle>
                  <InfoText>{delivery.recipient.city}</InfoText>
                </View>
                <Details onPress={details}>Ver detalhes</Details>
              </Bottom>
            </Card>
          );
        })}
      </View>
    </Container>
  );
}
