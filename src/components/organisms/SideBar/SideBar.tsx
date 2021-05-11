import React from 'react';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  width: 30%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  position: absolute;
  top: 100px;
  right: 0;
  color: white;
`;

const SideBar = () => {
  return (
    <SideBarWrapper>
      <p>hello world</p>
    </SideBarWrapper>
  );
};

export default SideBar;
