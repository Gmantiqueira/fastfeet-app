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

export const Card = styled.View`
  background-color: #fff;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 14px;
`;

export const CardTitle = styled.Text`
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  margin-left: 10px;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`;

export const Field = styled.View`
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  color: #999;
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  text-transform: uppercase;
`;

export const FieldInfo = styled.Text`
  color: #666;
  font-size: 14px;
  line-height: 26px;
`;

export const Action = styled(BaseButton)`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 15px 0;
`;

export const ActionInfo = styled.Text`
  color: #999;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
`;

export const Actions = styled.View`
  background: #f8f9fd;
  flex-direction: row;
  justify-content: space-between;
`;
