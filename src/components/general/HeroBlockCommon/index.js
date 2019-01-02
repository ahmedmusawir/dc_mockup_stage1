/**
 *
 * HeroBlockCommon.js
 *
 * A Row Container with Props
 * Props: classes [Utility Reactstrap Classes]
 *
 */
import React from 'react';
import styled from 'styled-components';
import { Container, Col, H1, H3 } from 'components/general';

const HeroBlockWithBgImage = styled.section`
  min-height: 80vh;
  background: url(${props => props.bgImgLink}) fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;

  // @media (max-width: 600px) {
  //   background-size: cover;
  // }

  // @media (min-width: 700px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw));
  // }
`;
const HeroHeading = styled(H1)`
  @media (max-width: 991px) {
    padding-top: 15vh;
    @media screen and (orientation: landscape) {
      font-size: 2.5rem;
    }
    @media screen and (orientation: portrait) {
      font-size: 2.8rem;
    }
  }
  @media (min-width: 992px) {
    @media screen and (orientation: landscape) {
      padding-top: 25vh;
      font-size: 3.5rem;
    }
    @media screen and (orientation: portrait) {
      padding-top: 20vh;
      font-size: 4rem;
    }
  }
`;
const HeroSubHeading = styled(H3)`
  font-weight: 400;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
  @media (max-width: 991px) {
    @media screen and (orientation: landscape) {
      padding-bottom: 7rem;
    }
    @media screen and (orientation: portrait) {
      padding-bottom: 6rem;
    }
  }
`;

export const HeroBlockCommon = props => {
  const { title, description, backgroundImg } = props;
  return (
    <HeroBlockWithBgImage bgImgLink={backgroundImg}>
      <Container>
        <Col xl="8">
          <HeroHeading light>{title}</HeroHeading>
          <HeroSubHeading light>{description}</HeroSubHeading>
        </Col>
      </Container>
    </HeroBlockWithBgImage>
  );
};

export default HeroBlockCommon;
