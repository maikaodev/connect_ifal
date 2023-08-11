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
      <S.Title style={[currentTheme === 'dark' && { color: '#fff' }]}>Configurações</S.Title>
      <S.SettingAction onPress={() => setModalIsOpen(true)}>
        <Ionicons
          name='ios-settings'
          size={24}
          color={currentTheme === 'dark' ? '#fff' : "#000"}
        />
      </S.SettingAction>
    </S.Settings>
    <Modal isVisible={modalIsOpen} >
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
            <S.Label>Tamanho da fonte</S.Label>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#ce4848"
              maximumTrackTintColor="#000000"
            />
          </S.FormGroup>
        </S.ModalBody>
      </S.ModalContainer>
      <S.CloseButton onPress={() => setModalIsOpen(false)}>
        <S.CloseButtonText>
          Fechar
        </S.CloseButtonText>
      </S.CloseButton>
    </Modal>
  </S.Container>
}