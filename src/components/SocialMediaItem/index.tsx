import { ReactNode } from 'react'

import * as S from './styles'

export interface SocialMediaItemProps {
  children: ReactNode
  text: string
}

export const SocialMediaItem = ({ children, text }: SocialMediaItemProps) => {
  return (
    <S.Container>
      {children}
      <S.text>{text}</S.text>
    </S.Container>
  )
}
