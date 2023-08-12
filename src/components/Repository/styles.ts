import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  border: 2px solid grey;

  margin: 16px 0;

  padding: 8px;

  gap: 8px;
`;
export const Text = styled.Text<{ size?: string }>`
  font-size: ${({ size }) => size || '16px'};
`;

