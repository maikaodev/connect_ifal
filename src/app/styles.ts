import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: #eeeeee;

  align-items: center;
  justify-content: center;

  padding-top: 24px;
`;

export const ContainerHeader = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 14px;

  position: relative;
`;

export const AppName = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const TextInput = styled.TextInput`
  border: 1px solid #000;
  padding: 2px 16px;

  border-radius: 50px;
`;

export const SearchAction = styled.TouchableOpacity``;

export const ContainerMain = styled.View`
  flex: 10;
  width: 100%;

  padding: 16px;
`;
export const Content = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 16px;
`;
export const ContentName = styled.View`
  gap: 8px;
`;

export const username = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
export const nickname = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;

export const photoPerfil = styled.Image`
  width: 110px;
  height: 110px;

  border-radius: 100px;
`;

export const contentBio = styled.View`
  gap: 16px;
`;

export const bio = styled.Text`
  font-size: 18px;

  margin-top: 8px;
`;

export const TextButton = styled.Text`
  color: #ffffff;

  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  width: 120px;

  background-color: #222;

  border-radius: 6px;

  padding: 16px;
`;

export const Footer = styled.View`
  flex: 1;

  margin-bottom: 8px;
`;

export const Text = styled.Text`
  font-size: 18px;
`;

