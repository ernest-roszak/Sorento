import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';

export const NavigationWrapper = styled.nav`
  width: 55%;
  margin: 0px auto;
  margin-left: 30%;
  margin-bottom: 4%;

  padding: 2%;
`;
const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white2};
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 15px 20px 15px auto;
  position: relative;
  border: 2px solid transparent;
  padding: 1%;

  &:hover {
    /* color: ${({ theme }) => theme.colors.green}; */
    border: 2px solid ${({ theme }) => theme.colors.white2};
    transition: color 0.4s erase-in-out;
  }

  /* &:hover::after {
    margin-top: -25px;
  } */

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    content: '';
    opacity: 0;
    transition: opacity 0.4s erase-in-out;
    position: absolute;
    width: 90%;
    height: 3px;
    transform: translateX(-50%);
    top: 130%;
    right: -40%;
    background-color: ${({ theme }) => theme.colors.white2};
  }
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Logo />
      <StyledLink exact to="/">
        Strona główna
      </StyledLink>
      <StyledLink to="/login">Sign in</StyledLink>
      <StyledLink to="/dashboard">Dashboard</StyledLink>
    </NavigationWrapper>
  );
};

export default Navigation;
