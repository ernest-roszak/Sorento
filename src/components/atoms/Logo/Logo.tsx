import React from 'react';
import logoSorento from 'assets/logos/LOGO_SORENTO.png';
import { StyledLogo } from './Logo.styles';

const Logo = () => {
  return <StyledLogo src={logoSorento} alt="Sorento" />;
};

export default Logo;
