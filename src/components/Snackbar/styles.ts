import styled from 'styled-components/native';

import { Snackbar } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  height: 180px;
  width: 100%;

  margin-bottom: 16px;

  z-index: 3;
`;
export const StyledSnackbar = styled(Snackbar)`
  width: 180px;
  margin: 0 auto;
`;

