import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Alert, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format} from 'date-fns';

import {debounce} from 'lodash';

import {useDispatch, useSelector} from 'react-redux';

import {api} from '@/services/api';
import {logout} from '@/store/modules/deliveryman/actions';

import {
  Avatar,
  Bold,
  Bottom,
  Card,
  CardTitle,
  Container,
  Details,
  DetailsText,
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
  Scroll,
  Tab,
  TabText,
  Tabs,
  TitleWrapper,
  Top,
  TextWrapper,
} from './styles';

export default function Dashboard({navigation}) {
  const [activeTab, setActive] = useState(0);

  const {id, name, url} = useSelector(state => state.deliveryman.profile);

  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadDeliveries(tabIndex = false) {
    const currentTab = typeof tabIndex === 'number' ? tabIndex : activeTab;
    try {
      const {data} = await api.get(
        `deliveryman/${id}/deliveries?${
          currentTab === 0 ? '' : 'finished=true'
        }`,
      );

      setDeliveries(data);
      setLoading(false);
    } catch (cancelled) {
      Alert.alert(
        'Falha de requisição.',
        'Falha ao trazer as informações das encomendas.',
      );
      setLoading(false);
    }
  }

  function handleTab(tabIndex) {
    setDeliveries([]);
    setLoading(true);
    setActive(tabIndex);
  }

  useEffect(
    debounce(() => {
      setDeliveries([]);
      setLoading(true);
      loadDeliveries(activeTab);
    }, 1000),
    [activeTab],
  );

  useFocusEffect(
    useCallback(() => {
      setDeliveries([]);
      setLoading(true);
      loadDeliveries();
    }, []),
  );

  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }

  function details(delivery) {
    navigation.navigate('Details', delivery);
  }

  const truncateString = (string, characters) => {
    const text = string.replace(/(\r\n|\n|\r)/gm, '');
    return text.length > characters
      ? `${text.substring(0, characters)}...`
      : text;
  };

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
            <Bold>{truncateString(name, 17)}</Bold>
          </TextWrapper>
        </Row>
        <Icon
          onPress={handleLogout}
          name="exit-to-app"
          size={32}
          color="#E74040"
        />
      </Header>

      <Tabs>
        <Bold>Entregas</Bold>
        <Row>
          <Tab onPress={() => handleTab(0)}>
            <TabText active={activeTab === 0}>Pendentes</TabText>
          </Tab>
          <Tab onPress={() => handleTab(1)}>
            <TabText active={activeTab === 1}>Entregues</TabText>
          </Tab>
        </Row>
      </Tabs>

      <Scroll loading={loading}>
        {loading && <ActivityIndicator size="large" color="#7D40E7" />}
        {deliveries.map(delivery => {
          return (
            <Card key={delivery.id}>
              <Top>
                <TitleWrapper>
                  <Icon color="#7d40e7" name="local-shipping" size={36} />
                  <CardTitle>{truncateString(delivery.product, 35)}</CardTitle>
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
                      : '-- / -- / ----'}
                  </InfoText>
                </View>

                <View>
                  <InfoTitle>Cidade</InfoTitle>
                  <InfoText>
                    {truncateString(delivery.recipient.city, 10)}
                  </InfoText>
                </View>
                <Details
                  onPress={() => {
                    details(delivery);
                  }}>
                  <DetailsText>Ver detalhes</DetailsText>
                </Details>
              </Bottom>
            </Card>
          );
        })}
      </Scroll>
    </Container>
  );
}
