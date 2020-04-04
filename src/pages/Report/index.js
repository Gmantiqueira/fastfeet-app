import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {reportProblemRequest} from '@/store/modules/dispatch/actions';

import {
  Card,
  Container,
  PurpleBackground,
  Textarea,
  WhiteBackground,
} from './styles';
import Button from '../../components/Button';

export default function Report({route}) {
  const id = route.params;
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  function handleReport() {
    dispatch(reportProblemRequest(id, description));
  }
  return (
    <WhiteBackground>
      <PurpleBackground />
      <Container>
        <Card>
          <Textarea
            autoCapitalize="none"
            autoCorrect={false}
            multiline={true}
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            onChangeText={setDescription}
            onSubmitEditing={handleReport}
            returnKeyType="send"
            textAlignVertical="top"
            value={description}
          />
        </Card>
        <Button
          style={{marginTop: 15.5, backgroundColor: '#7D40E7'}}
          onPress={handleReport}>
          Enviar
        </Button>
      </Container>
    </WhiteBackground>
  );
}
