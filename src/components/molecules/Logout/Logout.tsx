import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${Title} {
    color: ${({ theme }) => theme.colors.green};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  ${Button} {
    cursor: pointer;
    height: 26px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
`;

const Logout = () => {
  const { logout }: any = useAuth();
  const handleLogout = () => {
    logout();
  };
  const { userDetails }: any = useAuth();

  return (
    <Wrapper>
      <Title>Witaj {userDetails.name}</Title>
      <Button isBig={false} onClick={handleLogout}>
        Wyloguj
      </Button>
    </Wrapper>
  );
};

export default Logout;
