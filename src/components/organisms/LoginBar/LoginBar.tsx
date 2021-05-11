import Logo from 'components/atoms/Logo/Logo';
import SingIn from 'components/molecules/SignIn/SignIn';
import React from 'react';

import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.black};
  height: 80px;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;
`;

const LoginBar = () => {
  return (
    <Wrapper>
      <Logo />
      <SingIn />
    </Wrapper>
  );
};

export default LoginBar;
