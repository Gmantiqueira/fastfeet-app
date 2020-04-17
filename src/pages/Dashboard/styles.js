import styled from 'styled-components/native';
import {BaseButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
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

export const Tabs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10.5px;
  padding: 0 20px;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 68px;
  margin-bottom: 22.5px;
  margin-top: 25px;
  padding: 20px;
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
  font-size: 16px;
  line-height: 26px;
`;

export const Bold = styled.Text`
  color: #444;
  font-size: 22px;
  line-height: 29px;
`;

export const Tab = styled(BaseButton)`
  margin-left: 15px;
`;

export const TabText = styled.Text`
  color: ${props => (props.active ? '#7D40E7' : '#999999')};
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
`;

export const Card = styled.View`
  border-radius: 4px;
  elevation: 2;
  font-weight: bold;
  margin-bottom: 32px;
  width: 100%;
`;

export const TitleWrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Top = styled.View`
  padding: 14.5px;
`;

export const Progress = styled.View`
  margin: 24px auto 0;
  position: relative;
  width: 100%;
`;

export const ProgressLine = styled.View`
  background: #7d40e7;
  height: 1px;
  left: 40px;
  margin: 0 auto;
  position: absolute;
  top: 4px;
  width: 100%;
`;

export const DotWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 40px;
`;

export const ProgressDot = styled.View`
  background: ${props => (props.filled ? '#7d40e7' : '#fff')};
  border: 1px solid #7d40e7;
  border-radius: 4px;
  height: 8px;
  width: 8px;
  z-index: 1;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 8px;
`;

export const ProgressInfo = styled.Text`
  align-items: center;
  color: #999;
  flex-direction: row;
  font-size: 12px;
  margin-bottom: 6px;
  text-align: center;
  width: 70px;
`;

export const Bottom = styled.View`
  align-items: flex-end;
  background: #f8f9fd;
  flex-direction: row;
  justify-content: space-between;
  margin: 1px;
  padding: 18.5px;
`;

export const InfoTitle = styled.Text`
  color: #999;
  font-size: 12px;
  font-weight: bold;
`;

export const InfoText = styled.Text`
  color: #444;
  font-size: 16px;
  font-weight: bold;
`;

export const Details = styled(BaseButton)`
  background: transparent;
  border: 0;
  height: 24px;
  justify-content: center;
`;

export const DetailsText = styled.Text`
  color: #7d40e7;
  font-size: 16px;
  font-weight: bold;
`;

export const CardTitle = styled.Text`
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  margin-left: 10px;
`;
