import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  function finishDelivery() {
    console.log('Finish delivery');
  }
  async function takePhoto() {
    console.log(this.camera);
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
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
          <PreviewCamera
            ref={camera => {
              this.camera = camera;
            }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({barcodes}) => {
              console.log(barcodes);
            }}
          />
          <Camera onPress={takePhoto}>
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
