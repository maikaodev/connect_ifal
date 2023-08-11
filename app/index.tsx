import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Api } from '../src/api/communication';
import { Settings } from '../src/components/Settings';

import Ionicons from '@expo/vector-icons/Ionicons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';

import { SocialMediaItem } from '../src/components';

export interface userDetailsProps {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
  bio: string;
  twitter_username: string;
  blog: string;
}

export default function App() {
  const [userName, setUserName] = useState<string>('Maikaodev');
  const [userDetails, setUserDetails] = useState<userDetailsProps>();

  const [searchValue, setSearchValue] = useState<string>('');

  const handleChangeSearch = (value: string) => setSearchValue(value || '');

  const handleChangeUserName = (newUserName) => setUserName(newUserName);

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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <S.ContainerHeader>
        <S.AppName>Connect Ifal</S.AppName>
        <S.SearchContainer>
          <S.TextInput
            placeholder="Buscar usuário (github)"
            onChangeText={handleChangeSearch}
          />
          <S.SearchAction onPress={() => handleChangeUserName(searchValue)}>
            <Ionicons name="ios-search" size={24} color="#000" />
          </S.SearchAction>
        </S.SearchContainer>
      </S.ContainerHeader>

      <S.Container>
        <S.Content>
          <S.photoPerfil
            source={{ uri: userDetails.avatar_url as string }}
            alt="maikaodev"
          />
          <S.ContentName>
            <S.username>{userDetails.name}</S.username>
            <S.nickname>{userDetails.login}</S.nickname>
          </S.ContentName>
        </S.Content>
        <S.contentBio>
          <S.bio>{userDetails.bio}</S.bio>

          {userDetails.location && (
            <SocialMediaItem text={userDetails.location}>
              <EvilIcons name="location" size={24} color="black" />
            </SocialMediaItem>
          )}

          {userDetails.twitter_username && (
            <SocialMediaItem text={userDetails.twitter_username}>
              <AntDesign name="twitter" size={24} color="black" />
            </SocialMediaItem>
          )}

          {userDetails.blog && (
            <SocialMediaItem text={userDetails.blog}>
              <AntDesign name="link" size={18} color="black" />
            </SocialMediaItem>
          )}
        </S.contentBio>
      </S.Container>

      <Settings />
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

