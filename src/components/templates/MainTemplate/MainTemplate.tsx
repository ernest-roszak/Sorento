import Banner from 'components/atoms/Banner/Banner';
import LoginBar from 'components/organisms/LoginBar/LoginBar';
import React from 'react';
import ContentTemplate from '../ContentTemplate/ContentTemplate';

import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }: any) => {
  return (
    <Wrapper>
      <LoginBar />
      {/* <Banner /> */}
      <ContentTemplate>{children}</ContentTemplate>
    </Wrapper>
  );
};

export default MainTemplate;
