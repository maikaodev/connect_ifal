import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Api } from '../src/api/communication';
import { Settings } from '../src/components/Settings';

import { userDetailsProps } from '../src/@types/pages';

import { SocialMediaItem } from '../src/components';

import * as S from './styles';

import Ionicons from '@expo/vector-icons/Ionicons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [hiddenUserPhoto, setHiddenUserPhoto] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('light');
  const [fontSize, setFontSize] = useState<number>(1);
  const [userName, setUserName] = useState<string>('Maikaodev');
  const [userDetails, setUserDetails] = useState<userDetailsProps>();

  const [searchValue, setSearchValue] = useState<string>('');

  const handleChangeSearch = (value: string) => setSearchValue(value || '');

  const handleChangeUserName = (newUserName: string) =>
    setUserName(newUserName);

  const loadData = async () => {
    const response = await Api.getProfile(userName);

    if (response) {
      setUserDetails(response);
    }
  };

  useEffect(() => {
    if (userName && userName !== '') {
      loadData();
    }
  }, [userName]);

  const handleChangeTheme = (value) => {
    setTheme(value);
  };

  const handleHiddenUserPhoto = () => {
    setHiddenUserPhoto(!hiddenUserPhoto);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        theme === 'dark' && { backgroundColor: '#282c34' },
      ]}
    >
      <StatusBar style="auto" />
      <S.ContainerHeader>
        <S.AppName
          style={[
            theme === 'dark' && { color: '#fff' },
            { fontSize: 24 * fontSize },
          ]}
        >
          Connect Ifal
        </S.AppName>
        <S.SearchContainer>
          <S.TextInput
            placeholder="Buscar usuário (github)"
            onChangeText={handleChangeSearch}
            placeholderTextColor={theme === 'dark' ? '#fff' : '#000'}
            style={{
              borderColor: theme === 'dark' ? '#fff' : '#000',
            }}
          />
          <S.SearchAction onPress={() => handleChangeUserName(searchValue)}>
            <Ionicons
              name="ios-search"
              size={fontSize * 20}
              color={theme === 'dark' ? '#fff' : '#000'}
            />
          </S.SearchAction>
        </S.SearchContainer>
      </S.ContainerHeader>

      <S.Container>
        <S.Content>
          {!hiddenUserPhoto && (
            <S.photoPerfil
              source={{ uri: userDetails?.avatar_url as string }}
              alt="maikaodev"
            />
          )}
          <S.ContentName>
            <S.username
              style={[
                theme === 'dark' && { color: '#fff' },
                { fontSize: 24 * fontSize },
              ]}
            >
              {userDetails?.name}
            </S.username>
            <S.nickname
              style={[
                theme === 'dark' && { color: '#fff' },
                { fontSize: 24 * fontSize },
              ]}
            >
              {userDetails?.login}
            </S.nickname>
          </S.ContentName>
        </S.Content>
        <S.contentBio>
          <S.bio
            style={[
              theme === 'dark' && { color: '#fff' },
              { fontSize: 24 * fontSize },
            ]}
          >
            {userDetails?.bio}
          </S.bio>

          {userDetails?.location && (
            <SocialMediaItem
              text={userDetails?.location}
              style={[
                theme === 'dark' && { color: '#fff' },
                { fontSize: 24 * fontSize },
              ]}
            >
              <EvilIcons
                name="location"
                size={fontSize * 24}
                color={theme === 'dark' ? '#fff' : '#000'}
              />
            </SocialMediaItem>
          )}

          {userDetails?.twitter_username && (
            <SocialMediaItem
              text={userDetails?.twitter_username}
              style={[
                theme === 'dark' && { color: '#fff' },
                { fontSize: 24 * fontSize },
              ]}
            >
              <AntDesign
                name="twitter"
                size={fontSize * 24}
                color={theme === 'dark' ? '#fff' : '#000'}
              />
            </SocialMediaItem>
          )}

          {userDetails?.blog && (
            <SocialMediaItem
              text={userDetails?.blog}
              style={[
                theme === 'dark' && { color: '#fff' },
                { fontSize: 24 * fontSize },
              ]}
            >
              <AntDesign
                name="link"
                size={18}
                color={theme === 'dark' ? '#fff' : '#000'}
              />
            </SocialMediaItem>
          )}
        </S.contentBio>
      </S.Container>

      <Settings
        handleChangeTheme={handleChangeTheme}
        currentTheme={theme}
        handleHiddenUserPhoto={handleHiddenUserPhoto}
        hasUserPhoto={!hiddenUserPhoto}
        setFontSize={setFontSize}
        fontSize={fontSize}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

