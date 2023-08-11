import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between; 

  padding: 0 14px;
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

export const SearchAction = styled.TouchableOpacity`
  
`;
