import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';
import { Wrapper } from '../FormField/FormField';

export const SidebarFormField = styled.div`
  background: ${({ theme }) => theme.colors.green};
  width: 75%;
  opacity: 0.85;
  border-radius: 0 0 8px 8px;

  ${Wrapper} {
    flex-direction: row;
    justify-content: flex-end;
    margin: 8px;
  }

  ${Label} {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: right;
  }
`;
