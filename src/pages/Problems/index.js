import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';

import {format} from 'date-fns';

import {useDispatch} from 'react-redux';
import {cancelDelivery} from '@/store/modules/dispatch/actions';
import Button from '@/components/Button';

import api from '@/services/api';

import {
  Card,
  CardDescription,
  CardDate,
  Container,
  Scroll,
  Title,
  PurpleBackground,
  WhiteBackground,
} from './styles';

export default function Problems({route}) {
  const id = route.params;

  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadProblems() {
    setLoading(true);
    try {
      const {data} = await api.get(`delivery/${id}/problems`);

      setProblems(data);
      setLoading(false);
    } catch {
      Alert.alert(
        'Erro',
        'Falha ao trazer as informações dos problemas da encomenda.',
      );
      setLoading(false);
    }
  }

  function openDetails(details) {
    Alert.alert('Detalhes', details);
  }

  const truncateString = (string, characters) => {
    const text = string.replace(/(\r\n|\n|\r)/gm, '');
    return text.length > characters
      ? `${text.substring(0, characters)}...`
      : text;
  };

  useEffect(() => {
    loadProblems();
  }, []);

  const dispatch = useDispatch();
  function handleCancel() {
    dispatch(cancelDelivery(id));
  }

  return (
    <WhiteBackground>
      <PurpleBackground />
      <Container>
        <Title>Encomenda {id >= 10 ? id : `0${id}`}</Title>
        <Scroll loading={loading}>
          {loading && <ActivityIndicator size="large" color="#7D40E7" />}
          {problems.map((problem, index) => {
            return (
              <Card
                onPress={() => openDetails(problem.description)}
                key={index}>
                <CardDescription>
                  {truncateString(problem.description, 30)}
                </CardDescription>
                <CardDate>
                  {problem.created_at
                    ? format(new Date(problem.created_at), 'dd/MM/yyyy')
                    : '-- / -- / ----'}
                </CardDate>
              </Card>
            );
          })}
        </Scroll>
        <Button
          style={{
            marginBottom: 15.5,
            marginTop: 15.5,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: '#E74040',
            width: 'auto',
          }}
          onPress={handleCancel}>
          Cancelar encomenda
        </Button>
      </Container>
    </WhiteBackground>
  );
}
