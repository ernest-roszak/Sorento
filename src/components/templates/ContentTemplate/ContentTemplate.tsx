import React from 'react';
import banner from 'assets/banners/BANER_3.jpg';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.spaces.loginBarHeight});
  background: url(${banner});
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
