import { useState } from 'react'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import * as S from './styles';

export const Settings = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return <S.Container>
    <S.Divider/>
    <S.Settings>
      <S.Title>Configurações</S.Title>
      <S.SettingAction onPress={() => setModalIsOpen(true)}>
        <Ionicons
          name='ios-settings'
          size={24}
          color='#000'
        />
      </S.SettingAction>
    </S.Settings>
    <S.Modal
      animationType="slide"
      transparent={false}
      visible={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >

    </S.Modal>
  </S.Container>
}