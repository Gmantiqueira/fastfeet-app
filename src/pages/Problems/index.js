import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {format} from 'date-fns';

import {useDispatch} from 'react-redux';
import {cancelDelivery} from '@/store/modules/dispatch/actions';

import {
  Card,
  CardDescription,
  CardDate,
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
      <View>
        <Title>Encomenda {id >= 10 ? id : `0${id}`}</Title>
        <Scroll loading={loading}>
          {loading && <ActivityIndicator size="large" color="#7D40E7" />}
          {problems.map(problem => {
            return (
              <Card>
                <CardDescription>{problem.description}</CardDescription>
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
          style={{marginTop: 15.5, backgroundColor: '#E74040'}}
          onPress={handleCancel}>
          Cancelar encomenda
        </Button>
      </View>
    </WhiteBackground>
  );
}
