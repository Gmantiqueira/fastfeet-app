import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 68px;
  margin-bottom: 22.5px;
`;

export const Avatar = styled.Image`
  border-radius: 34px;
  height: 68px;
  width: 68px;
`;

export const Row = styled.View`
  align-items: flex-end;
  flex-direction: row;
`;

export const TextWrapper = styled.View`
  margin-left: 12px;
  padding: 12px 0;
`;

export const Greet = styled.Text`
  color: #666;
  font-size: 12px;
  line-height: 26px;
`;

export const Bold = styled.Text`
  color: #444;
  font-size: 22px;
  line-height: 29px;
`;

export const Tab = styled.Text`
  color: ${props => (props.active ? '#7D40E7' : '#999999')};
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  margin-left: 15px;
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
`;

export const Card = styled.View`
  border-radius: 4px;
  box-shadow: 0px 0px 3px #0000001a;
  font-weight: bold;
  width: 100%;
`;

export const CardTitle = styled.Text`
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  margin-left: 10px;
`;
