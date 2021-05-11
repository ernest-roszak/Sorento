import styled from 'styled-components';

export const Button = styled.button<{ isBig: boolean }>`
  margin: 13px 10px;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  background-color: ${({ theme }) => theme.colors.white2};
  border-radius: 8px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
