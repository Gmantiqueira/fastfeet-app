import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RNCamera} from 'react-native-camera';

import {
  Camera,
  Card,
  Container,
  PreviewCamera,
  PurpleBackground,
  WhiteBackground,
} from './styles';
import Button from '../../components/Button';

export default function Finish() {
  function handleFinish() {
    console.log('Finish delivery');
  }
  async function takePhoto(camera) {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        captureAudio: false,
        pauseAfterCapture: true,
      };
      const data = await camera.takePictureAsync(options);
      setPreview(data.uri);
    }
  }

  const [preview, setPreview] = useState(null);

  return (
    <WhiteBackground>
      <PurpleBackground />
      <Container>
        <Card
          source={{
            uri:
              preview ||
              'https://http2.mlstatic.com/10-caixas-papelo-tipo-2-original-correios-jogos-rio-2016-D_NQ_NP_300501-MLB20340448789_072015-F.jpg',
          }}>
          <RNCamera
            style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 20}}
            captureAudio={false}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
              title: 'Permissão para usar a câmera',
              message:
                'Nós precisamos de sua permissão para habilitar a câmera.',
              buttonPositive: 'Habilitar',
              buttonNegative: 'Cancelar',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permissão para usar gravação de áudio',
              message:
                'Nós precisamos de sua permissão para habilitar a gravação de áudio.',
              buttonPositive: 'Habilitar',
              buttonNegative: 'Cancelar',
            }}>
            {({camera}) => {
              return (
                <Camera onPress={() => takePhoto(camera)}>
                  <Icon color="#fff" name="camera-alt" size={36} />
                </Camera>
              );
            }}
          </RNCamera>
        </Card>
        <Button
          style={{marginTop: 11, backgroundColor: '#7D40E7'}}
          onPress={handleFinish}>
          Enviar
        </Button>
      </Container>
    </WhiteBackground>
  );
}
