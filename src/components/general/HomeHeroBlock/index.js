/**
 *
 * HomeHeroBlock.js
 *
 * A Row Container with Props
 * Props: classes [Utility Reactstrap Classes]
 *
 */
import React from 'react';
import styled from 'styled-components';
import { Container, Col, H1, H3, HeroBlock } from 'components/general';

const HeroBlockWithBgImage = styled.div`
  min-height: 50vh;
  background-image: url('/images/oil-rig.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: right bottom;

  @media (min-width: 600px) {
    background-size: 80%;
  }
  @media (min-width: 900px) {
    background-size: 60%;
  }
  @media (min-width: 1150px) {
    background-size: 50%;
  }
  @media (min-width: 1350px) {
    background-size: 40%;
  }
  @media (min-width: 1700px) {
    background-size: 35%;
  }
`;

const HomeHeroHeading = styled(H1)`
  padding-top: 15vh;
  @media (max-width: 650px) {
    font-size: 2rem;
    padding-top: 0;
  }
  @media (max-width: 750px) {
    font-size: 2.5rem;
    padding-top: 0;
  }
  @media (max-width: 767px) {
    padding-top: 5vh;
    @media screen and (orientation: portrait) {
      padding-top: 15vh;
    }
  }
  @media (min-width: 768px) {
    @media screen and (orientation: portrait) {
      font-size: 3.5rem;
      padding-top: 13vh;
    }
    @media screen and (orientation: landscape) {
      font-size: 3.5rem;
      padding-top: 10vh;
    }
  }
`;

export const HomeHeroBlock = props => {
  const { title, subtitle, theme } = props;
  if (theme === 'dark') {
    return (
      <HeroBlock>
        <HeroBlockWithBgImage>
          <Container>
            <Col xl="8">
              <HomeHeroHeading light>{title}</HomeHeroHeading>
              <H3 light>{subtitle}</H3>
            </Col>
          </Container>
        </HeroBlockWithBgImage>
      </HeroBlock>
    );
  } else {
    return (
      <HeroBlock>
        <HeroBlockWithBgImage>
          <Container>
            <Col xl="8">
              <HomeHeroHeading>{title}</HomeHeroHeading>
              <H3>{subtitle}</H3>
            </Col>
          </Container>
        </HeroBlockWithBgImage>
      </HeroBlock>
    );
  }
};

export default HomeHeroBlock;
