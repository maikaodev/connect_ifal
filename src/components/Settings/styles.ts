import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 8;
  width: 100%;

  padding: 16px;
`;

export const Divider = styled.View`
  border: 1px solid #000;
`;

export const Settings = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16px 0;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const SettingAction = styled.TouchableOpacity``;

export const Modal = styled.Modal`
  background-color: red;
`;