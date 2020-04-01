import React from 'react';

import {
  Card,
  Container,
  PurpleBackground,
  Textarea,
  WhiteBackground,
} from './styles';
import Button from '../../components/Button';

export default function Report() {
  function reportProblem() {
    console.log('report problem');
  }
  return (
    <WhiteBackground>
      <PurpleBackground />
      <Container>
        <Card>
          <Textarea
            multiline={true}
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            textAlignVertical="top"
          />
        </Card>
        <Button
          style={{marginTop: 15.5, backgroundColor: '#7D40E7'}}
          onPress={reportProblem}>
          Enviar
        </Button>
      </Container>
    </WhiteBackground>
  );
}
