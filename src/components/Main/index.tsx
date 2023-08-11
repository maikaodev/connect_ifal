import { SocialMediaItem } from '../SocialMediaItem'
import * as S from './styles'

import { EvilIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

interface MainProps {
  userDetails: any;
}

export const Main = ({ userDetails }: MainProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.photoPerfil
          source={{ uri: userDetails?.avatar_url as string }}
          alt="maikaodev"
        />
        <S.ContentName>
          <S.username>{userDetails?.name}</S.username>
          <S.nickname>{userDetails?.login}</S.nickname>
        </S.ContentName>
      </S.Content>
      <S.contentBio>
        <S.bio>
          {userDetails?.bio}
        </S.bio>
        <SocialMediaItem text={userDetails?.location}>
          <EvilIcons name="location" size={24} color="black" />
        </SocialMediaItem>
        <SocialMediaItem text={userDetails?.twitter_username || 'Usuário sem twitter'}>
          <AntDesign name="twitter" size={24} color="black" />
        </SocialMediaItem>
        <SocialMediaItem text={userDetails?.blog || 'Usuário sem linkedin'}>
          <AntDesign name="linkedin-square" size={24} color="black" />
        </SocialMediaItem>
      </S.contentBio>
    </S.Container>
  )
}
