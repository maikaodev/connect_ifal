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

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #fff;

  border-radius: 8px;

  padding: 16px;
`;

export const ModalTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;

  text-align: center;
`;

export const ModalBody = styled.View`
  flex: 1;
`;

export const FormGroup = styled.View`
  margin-top: 16px;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;
