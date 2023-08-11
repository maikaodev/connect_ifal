import Ionicons from '@expo/vector-icons/Ionicons';
import * as S from './styles';
import { useState } from 'react';

interface HeaderProps {
  handleChangeUserName: (newUserName: string) => void;
};

export const Header = ({ handleChangeUserName }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  
  const handleChangeSearch = (value: string) => setSearchValue(value || '');

  return (
    <S.Container>
      <S.AppName>Connect Ifal</S.AppName>
      <S.SearchContainer>
        <S.TextInput 
          placeholder="Buscar usuário (github)"
          onChangeText={handleChangeSearch}
        />
        <S.SearchAction onPress={() => handleChangeUserName(searchValue)}>
          <Ionicons
            name='ios-search'
            size={24}
            color='#000'
          />
        </S.SearchAction>
      </S.SearchContainer>
    </S.Container>
  )
}
