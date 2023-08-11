import * as S from './styles'

export const Main = () => {
  return (
    <S.Container>
      <S.photoPerfil
        source={{ uri: 'https://github.com/maikaodev.png' }}
        alt="maikaodev"
      />
      <S.title>Connect Ifal - maikaodev & jhonata da nova geração</S.title>
    </S.Container>
  )
}
