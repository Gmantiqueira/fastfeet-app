import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
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
  LoaderWrapper,
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
  const [page, setPagination] = useState(1);
  const [loadingPage, setLoadingPage] = useState(false);

  const {id, name, url} = useSelector(state => state.deliveryman.profile);

  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [haveMoreData, setHaveMoreData] = useState(true);

  async function loadDeliveries(resetPagination) {
    if (resetPagination) {
      setDeliveries([]);
    }

    if (page > 1) {
      setLoadingPage(true);
    } else {
      setLoading(true);
    }

    try {
      const {data} = await api.get(
        `deliveryman/${id}/deliveries?${
          activeTab === 0 ? '' : 'finished=true'
        }`,
        {
          params: {page: resetPagination ? 1 : page},
        },
      );

      setDeliveries(
        resetPagination || page === 1
          ? data
          : oldElements => [...oldElements, ...data],
      );

      if (data.length < 10) {
        setHaveMoreData(false);
      } else {
        setHaveMoreData(true);
      }

      setLoading(false);
      setLoadingPage(false);
    } catch (cancelled) {
      Alert.alert(
        'Falha de requisição.',
        'Falha ao trazer as informações das encomendas.',
      );
      setLoading(false);
      setLoadingPage(false);
    }
  }

  function handleTab(tabIndex) {
    setHaveMoreData(true);
    setDeliveries([]);
    setLoading(true);
    setActive(tabIndex);
  }

  useFocusEffect(
    useCallback(() => {
      setPagination(1);
    }, []),
  );

  useEffect(() => {
    if (page > 1 && haveMoreData) {
      loadDeliveries();
    }
  }, [page]);

  useFocusEffect(
    useCallback(
      debounce(() => {
        setPagination(1);
        loadDeliveries(true);
      }, 1000),
      [activeTab],
    ),
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

      <Scroll
        loading={loading}
        data={deliveries}
        ListEmptyComponent={() =>
          loading && <ActivityIndicator size="large" color="#7D40E7" />
        }
        renderItem={({item}) => (
          <Card>
            <Top>
              <TitleWrapper>
                <Icon color="#7d40e7" name="local-shipping" size={36} />
                <CardTitle>{truncateString(item.product, 35)}</CardTitle>
              </TitleWrapper>
              <Progress>
                <DotWrapper>
                  <ProgressLine />
                  <ProgressDot filled />
                  <ProgressDot filled={item.start_date} />
                  <ProgressDot filled={item.end_date} />
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
                  {item.start_date
                    ? format(new Date(item.start_date), 'dd/MM/yyyy')
                    : '-- / -- / ----'}
                </InfoText>
              </View>

              <View>
                <InfoTitle>Cidade</InfoTitle>
                <InfoText>{truncateString(item.recipient.city, 10)}</InfoText>
              </View>
              <Details
                onPress={() => {
                  details(item);
                }}>
                <DetailsText>Ver detalhes</DetailsText>
              </Details>
            </Bottom>
          </Card>
        )}
        keyExtractor={item => item.id}
        onEndReached={() => {
          if (deliveries.length && haveMoreData && !loadingPage) {
            setLoadingPage(true);
            setPagination(old => old + 1);
          }
        }}
        onEndReachedThreshold={1}
        ListFooterComponent={() =>
          deliveries.length !== 0 &&
          loadingPage && (
            <LoaderWrapper>
              <ActivityIndicator size="large" color="#7D40E7" />
            </LoaderWrapper>
          )
        }
      />
    </Container>
  );
}
