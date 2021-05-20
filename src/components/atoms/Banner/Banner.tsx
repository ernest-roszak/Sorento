import React from 'react';
import banner from 'assets/banners/BANER_3.jpg';
import styled from 'styled-components';

const BannerImage = styled.img`
  width: 100%;
`;

const Banner = () => {
  return <BannerImage src={banner} alt="Sorento baner" />;
};

export default Banner;
