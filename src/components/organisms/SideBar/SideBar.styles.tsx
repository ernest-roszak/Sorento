import styled from 'styled-components';
import { StyledLogo } from 'components/atoms/Logo/Logo.styles';
import { Form } from 'components/molecules/SignIn/SingIn.styles';
import { Label } from 'components/atoms/Label/Label';
import { Wrapper } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

export const SideBarWrapper = styled.div<{ isOpen: boolean }>`
  width: 30%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  position: absolute;
  top: ${({ theme }) => theme.spaces.loginBarHeight};
  right: 0px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0%)' : 'translateX(100%)')};
  color: white;
  transition: transform 1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${StyledLogo} {
    width: 180px;
    height: auto;
  }

  ${Form} {
    background: ${({ theme }) => theme.colors.green};
    width: 75%;
    opacity: 0.7;
    border-radius: 0 0 8px 8px;
    flex-direction: column;
  }
  ${Label} {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: right;
  }

  ${Wrapper} {
    flex-direction: row;
    justify-content: flex-end;
    margin: 8px;
  }
  ${Button} {
    width: fit-content;
    margin: 16px auto;

    &:hover {
      background: ${({ theme }) => theme.colors.white2};
    }
  }
`;

export const SideBarButton = styled.button`
  width: 80%;
  background: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  height: 40px;
  cursor: pointer;
`;
