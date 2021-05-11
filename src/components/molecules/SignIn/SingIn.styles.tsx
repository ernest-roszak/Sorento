import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 160px 160px 120px;
  grid-template-rows: 70% 30%;
  ${Button} {
    margin-top: 21px;
    cursor: pointer;
    height: 26px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const StyledLink = styled.span`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white2};
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
`;
