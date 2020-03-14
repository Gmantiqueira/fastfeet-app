import styled from 'styled-components/native';
import {BaseButton} from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  border-radius: 4px;
  height: 45px;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
