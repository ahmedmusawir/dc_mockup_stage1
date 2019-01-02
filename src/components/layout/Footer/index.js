import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  flex: 0;
  flex-shrink: 0;
  z-index: 0;
  // @media (min-width: 700px) {
  //   clip-path: polygon(0 0, 100% 35%, 100% 100%, 0% 100%);
  // }
`;

export const Footer = ({ children }) => (
  <FooterContainer>{children}</FooterContainer>
);

export default Footer;
