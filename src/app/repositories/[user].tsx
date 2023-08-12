import { Link, useLocalSearchParams } from 'expo-router';
import { Api } from '../../api/communication';

import * as S from './styles';
import { useEffect, useState } from 'react';
import { DataProps } from '../../@types/pages';
import { ScrollView } from 'react-native';
import { Repository } from '../../components';

export default function Repositories() {
  const [data, setData] = useState<DataProps[]>([]);

  const { user } = useLocalSearchParams();

  const loadData = async () => {
    const response: DataProps[] = await Api.getProfile(
      `https://api.github.com/users/${user}/repos`,
    );

    setData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <S.Container>
      <Link href="/" asChild>
        <S.Button>
          <S.TextButton>Voltar</S.TextButton>
        </S.Button>
      </Link>
      <S.Content>
        <S.Title>Repositórios</S.Title>
        {data.length === 0 ||
          (data === null && <S.Title>Não há repositórios</S.Title>)}
        {data.length > 0 && (
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.map(({ name, description, language }) => (
              <Repository
                key={name}
                name={name}
                description={description}
                language={language}
              />
            ))}
          </ScrollView>
        )}
      </S.Content>
    </S.Container>
  );
}

