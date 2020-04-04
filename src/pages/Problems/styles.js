import styled from 'styled-components/native';
import {BaseButton} from 'react-native-gesture-handler';

export const WhiteBackground = styled.View`
  background-color: #fff;
  flex: 1;
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

export const Scroll = styled.ScrollView.attrs(
  props =>
    props.loading && {
      contentContainerStyle: {justifyContent: 'center', flex: 1},
    },
)`
  flex: 1;
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 12px;
  padding-top: 20px;
  text-align: center;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Card = styled(BaseButton)`
  align-items: center;
  background: #fff;
  border-radius: 4px;
  elevation: 3;
  flex-direction: row;
  height: 55px;
  justify-content: space-between;
  margin: 1px;
  margin-bottom: 16px;
  padding: 0px 10px 0px 20px;
`;

export const CardDescription = styled.Text`
  color: #999;
  font-size: 16px;
  line-height: 21px;
`;

export const CardDate = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
  line-height: 16px;
`;
