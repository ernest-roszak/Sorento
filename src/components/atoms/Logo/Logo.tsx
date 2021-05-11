import React from 'react';
import logoSorento from 'assets/logos/LOGO_SORENTO.png';
import { StyledLogo } from './Logo.styles';

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logoSorento} alt="Sorento" />
    </StyledLogo>
  );
};

export default Logo;
