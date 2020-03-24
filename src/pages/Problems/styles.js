import styled from 'styled-components/native';

export const WhiteBackground = styled.ScrollView`
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

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 12px;
  text-align: center;
`;

export const Card = styled.View`
  align-items: center;
  background: #fff;
  border: 1px solid black;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 18px 10px 18px 20px;
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
