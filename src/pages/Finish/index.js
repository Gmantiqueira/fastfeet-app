import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Camera,
  Card,
  Container,
  PurpleBackground,
  WhiteBackground,
} from './styles';
import Button from '../../components/Button';

export default function Finish() {
  function finishDelivery() {
    console.log('Finish delivery');
  }
  return (
    <WhiteBackground>
      <PurpleBackground />
      <Container>
        <Card
          source={{
            uri:
              'https://http2.mlstatic.com/10-caixas-papelo-tipo-2-original-correios-jogos-rio-2016-D_NQ_NP_300501-MLB20340448789_072015-F.jpg',
          }}>
          <Camera>
            <Icon color="#fff" name="camera-alt" size={36} />
          </Camera>
        </Card>
        <Button
          style={{marginTop: 11, backgroundColor: '#7D40E7'}}
          onPress={finishDelivery}>
          Enviar
        </Button>
      </Container>
    </WhiteBackground>
  );
}
