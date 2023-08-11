import { SocialMediaItem } from '../SocialMediaItem'
import * as S from './styles'

import { EvilIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

export const Main = () => {
  return (
    <S.Container>
      <S.Content>
        <S.photoPerfil
          source={{ uri: 'https://github.com/maikaodev.png' }}
          alt="maikaodev"
        />
        <S.ContentName>
          <S.username>Angelo Danrley</S.username>
          <S.nickname>Maikaodev</S.nickname>
        </S.ContentName>
      </S.Content>

      <S.contentBio>
        <S.bio>
          Desenvolvedor Fullstack, apaixonado por tecnologia e programação
        </S.bio>
        <SocialMediaItem text="Brazil">
          <EvilIcons name="location" size={24} color="black" />
        </SocialMediaItem>

        <SocialMediaItem text="@maikaodev">
          <AntDesign name="twitter" size={24} color="black" />
        </SocialMediaItem>

        <SocialMediaItem text="in/maikaodev">
          <AntDesign name="linkedin-square" size={24} color="black" />
        </SocialMediaItem>
      </S.contentBio>
    </S.Container>
  )
}
