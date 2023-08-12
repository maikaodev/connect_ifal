import { useEffect, useState } from 'react';
import { DataProps } from '../../@types/pages';
import { Api } from '../../api/communication';

import * as S from './styles';

export const Repository = ({ name, description, language }: DataProps) => {
  const formatText = (inputText: string): string => {
    const symbols = '!@#$%^&*()-_=+[]{}|;:",<>.?/~`';

    const formattedText = [...inputText]
      .map((char) => (symbols.includes(char) ? ' ' : char))
      .join('');

    const capitalizedText =
      formattedText.charAt(0).toUpperCase() + formattedText.slice(1);

    return capitalizedText;
  };

  return (
    <S.Container>
      {name && (
        <S.Text size="18px">Nome do repositório: {formatText(name)}</S.Text>
      )}
      {description && <S.Text>Descrição: {description}</S.Text>}
      {language && <S.Text>Linguagem: {language}</S.Text>}
    </S.Container>
  );
};

