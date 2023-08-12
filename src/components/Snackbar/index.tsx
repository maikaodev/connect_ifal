import { Provider } from 'react-native-paper';

import { SnackbarProps } from '../../@types/components';

import * as S from './styles';

export const Snackbar = ({
  description,
  visible = false,
  fn,
}: SnackbarProps) => {
  return (
    <S.Container>
      <Provider>
        <S.StyledSnackbar
          visible={visible}
          onDismiss={() => {
            fn(false);
          }}
          duration={2000}
          elevation={4}
        >
          {description}
        </S.StyledSnackbar>
      </Provider>
    </S.Container>
  );
};

