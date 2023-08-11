import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 10;
  width: 100%;

  padding: 16px;
`
export const Content = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 16px;
`
export const ContentName = styled.View`
  gap: 8px;
`

export const username = styled.Text`
  font-size: 24px;
  font-weight: bold;
`
export const nickname = styled.Text`
  font-size: 18px;
  font-weight: 400;
`

export const photoPerfil = styled.Image`
  width: 110px;
  height: 110px;

  /* border-radius: 100%; */
`

export const contentBio = styled.View``

export const bio = styled.Text`
  font-size: 18px;

  margin-top: 8px;
`
