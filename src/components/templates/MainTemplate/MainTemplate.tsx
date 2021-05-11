import Banner from 'components/atoms/Banner/Banner';
import LoginBar from 'components/organisms/LoginBar/LoginBar';
import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';

import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }: any) => {
  return (
    <Wrapper>
      <LoginBar />
      <Banner />
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
