import { useState } from 'react';
import { Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

import { SettingsProps } from '../../@types/components';

import * as S from './styles';

import Ionicons from '@expo/vector-icons/Ionicons';
import Modal from 'react-native-modal';

export const Settings = ({
  handleChangeTheme,
  currentTheme = 'dark',
  hasUserPhoto = true,
  handleHiddenUserPhoto,
  fontSize,
  setFontSize,
}: SettingsProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <S.Container>
      <S.Divider />

      <S.Settings>
        <S.SettingAction onPress={() => setModalIsOpen(true)}>
          <S.Title
            style={[
              currentTheme === 'dark' && { color: '#fff' },
              { fontSize: 24 * fontSize },
            ]}
          >
            Configurações
          </S.Title>
          <Ionicons
            name="ios-settings"
            size={fontSize * 20}
            color={currentTheme === 'dark' ? '#fff' : '#000'}
            style={{ marginTop: 3 }}
          />
        </S.SettingAction>
      </S.Settings>

      <Modal isVisible={modalIsOpen}>
        <S.ModalContainer>
          <S.ModalTitle>Configurações</S.ModalTitle>

          <S.ModalBody>
            <S.FormGroup>
              <S.Label style={{ fontSize: fontSize * 16 }}>Tema</S.Label>
              <Picker
                selectedValue={currentTheme}
                onValueChange={(itemValue) => handleChangeTheme(itemValue)}
                style={[
                  { backgroundColor: '#efeeee' },
                  { fontSize: fontSize * 16 },
                ]}
              >
                <Picker.Item
                  label="Light mode"
                  value="light"
                  style={{ fontSize: fontSize * 16 }}
                />
                <Picker.Item
                  label="Dark mode"
                  value="dark"
                  style={{ fontSize: fontSize * 16 }}
                />
              </Picker>
            </S.FormGroup>
            <S.FormGroup
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <S.Label style={{ fontSize: fontSize * 16 }}>
                Mostrar foto do usuário
              </S.Label>
              <Switch
                trackColor={{ false: '#767577', true: '#6f90d9' }}
                thumbColor={hasUserPhoto ? '#6e6a6a' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={handleHiddenUserPhoto}
                value={hasUserPhoto}
              />
            </S.FormGroup>
            <S.FormGroup
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <S.ContainerSlider>
                <S.Label style={{ fontSize: fontSize * 16 }}>
                  Tamanho da fonte
                </S.Label>
                <Slider
                  style={{ width: 200, height: 40 }}
                  minimumValue={1}
                  maximumValue={1.5}
                  step={0.25}
                  minimumTrackTintColor="#ce4848"
                  maximumTrackTintColor="#000000"
                  value={fontSize}
                  onValueChange={setFontSize}
                />
              </S.ContainerSlider>
            </S.FormGroup>
          </S.ModalBody>
        </S.ModalContainer>

        <S.CloseButton onPress={() => setModalIsOpen(false)}>
          <S.CloseButtonText>Fechar</S.CloseButtonText>
        </S.CloseButton>
      </Modal>
    </S.Container>
  );
};

