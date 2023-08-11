import { useState } from 'react';
import { Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import Modal from "react-native-modal";
import * as S from './styles';

interface SettingsProps {
  handleChangeTheme: (value: string) => void;
  currentTheme: string;
  hasUserPhoto: boolean;
  handleHiddenUserPhoto: () => void;
};

export const Settings = ({ handleChangeTheme, currentTheme = 'dark', hasUserPhoto = true, handleHiddenUserPhoto }: SettingsProps) => {
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
    <Modal isVisible={modalIsOpen}>
      <S.ModalContainer>
        <S.ModalTitle>
          Configurações
        </S.ModalTitle>
        <S.ModalBody>
          <S.FormGroup>
            <S.Label>Tema</S.Label>
            <Picker
              selectedValue={currentTheme}
              onValueChange={itemValue => handleChangeTheme(itemValue)}
              style={{ backgroundColor: '#efeeee' }}
            >
              <Picker.Item label="Light mode" value="light" />
              <Picker.Item label="Dark mode" value="dark" />
            </Picker>
          </S.FormGroup>
          <S.FormGroup style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <S.Label>Mostrar foto do usuário</S.Label>
            <Switch
              trackColor={{false: '#767577', true: '#6f90d9'}}
              thumbColor={hasUserPhoto ? '#6e6a6a' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleHiddenUserPhoto}
              value={hasUserPhoto}
            />
          </S.FormGroup>
          <S.FormGroup style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <S.Label>Fonte</S.Label>
            
          </S.FormGroup>
        </S.ModalBody>
      </S.ModalContainer>
    </Modal>
  </S.Container>
}