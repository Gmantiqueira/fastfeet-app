import styled from 'styled-components/native';
import {BaseButton} from 'react-native-gesture-handler';

export const WhiteBackground = styled.View`
  background-color: #fff;
  height: 100%;
  position: relative;
  z-index: 0;
`;

export const PurpleBackground = styled.View`
  background-color: #7d40e7;
  height: 100px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

export const Container = styled.View`
  padding: 20px;
`;

export const Card = styled.ImageBackground`
  align-items: center;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 4px;
  justify-content: flex-end;
  height: 90%;
  padding: 20px;
`;

export const Camera = styled(BaseButton)`
  align-items: center;
  background-color: #0000004d;
  border-radius: 30.5px;
  justify-content: center;
  height: 61px;
  width: 61px;
`;
