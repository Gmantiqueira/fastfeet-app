import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RNCamera} from 'react-native-camera';
import {useDispatch} from 'react-redux';
import {Alert} from 'react-native';
import {finishDeliveryRequest} from '@/store/modules/dispatch/actions';

import {
  Camera,
  Card,
  Container,
  PurpleBackground,
  WhiteBackground,
} from './styles';
import Button from '../../components/Button';

export default function Finish({route}) {
  const dispatch = useDispatch();
  const deliveryId = route.params;
  function handleFinish() {
    if (!preview) {
      Alert.alert(
        '',
        'Não é possível finalizar a entrega sem a imagem da assinatura. Tire a foto e tente novamente.',
      );
    }
    dispatch(finishDeliveryRequest(deliveryId, fileData));
  }
  async function takePhoto(camera) {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        captureAudio: false,
        pauseAfterCapture: true,
        orientation: 'portrait',
      };
      const data = await camera.takePictureAsync(options);
      setFileData(data);
      setPreview(data.uri);
    }
  }

  const [fileData, setFileData] = useState(null);
  const [preview, setPreview] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);

  return (
    <WhiteBackground>
      <PurpleBackground />
      <Container>
        <Card
          source={{
            uri: preview,
          }}>
          <RNCamera
            onCameraReady={() => setCameraReady(true)}
            style={{
              alignItems: 'center',
              display: cameraReady ? 'flex' : 'none',
              flex: 1,
              justifyContent: 'flex-end',
              paddingBottom: 20,
              width: '100%',
            }}
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
          style={{margin: 0, marginTop: 11, backgroundColor: '#7D40E7'}}
          onPress={handleFinish}>
          Enviar
        </Button>
      </Container>
    </WhiteBackground>
  );
}
