import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  grid-area: header;
  ${Button} {
    margin-top: 21px;
    cursor: pointer;
    height: 26px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: 160px 160px 120px;
  grid-template-rows: 70% 30%; */
  grid-template-areas:
    ' header header'
    ' main main';
  justify-items: flex-end;
`;

export const StyledLink = styled.button`
  font-weight: bold;
  background: none;
  outline: none;
  border: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white2};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  max-width: 125px;
  cursor: pointer;
  margin-top: -10px;
  margin-right: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 8px;
  }
`;
