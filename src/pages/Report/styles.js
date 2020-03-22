import styled from 'styled-components/native';

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
  padding: 20px;
`;

export const Textarea = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  color: #666;
  font-size: 16px;
  height: 300px;
`;
