import { ReactNode } from 'react'
import * as S from './styles'

export interface SocialMediaItemProps {
  children: ReactNode
  text: string
  style?: any;
}

export const SocialMediaItem = ({ children, text, style }: SocialMediaItemProps) => {
  return (
    <S.Container>
      {children}
      <S.text style={style}>{text}</S.text>
    </S.Container>
  )
}
