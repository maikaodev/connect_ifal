import { SocialMediaItemProps } from '../../@types/components';

import * as S from './styles';

export const SocialMediaItem = ({
  children,
  text,
  style,
}: SocialMediaItemProps) => {
  return (
    <S.Container>
      {children}
      <S.text style={style}>{text}</S.text>
    </S.Container>
  );
};

