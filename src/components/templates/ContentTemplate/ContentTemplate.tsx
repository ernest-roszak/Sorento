import React from 'react';
import banner from 'assets/banners/BANER_3.jpg';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import { StyledLogo } from 'components/atoms/Logo/Logo.styles';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.spaces.loginBarHeight});
  background: url(${banner}) no-repeat;
  background-size: cover;
  position: relative;

  ${StyledLogo} {
    width: 10%;
    height: auto;
    position: absolute;
    top: -2%;
    left: 20%;
  }
`;

const ContentTemplate = ({ children }: any) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default ContentTemplate;
