/**
 *
 * ForecasterHeroBlock.js
 *
 * A Row Container with Props
 * Props: classes [Utility Reactstrap Classes]
 *
 */
import React from 'react';
import styled from 'styled-components';
import { Container, Col, H1, H3 } from 'components/general';

const HeroBlockWithBgImage = styled.section`
  min-height: 50vh;
  background-image: url('/images/forecast-header.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;

  @media (min-width: 700px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw));
  }
`;
const ForecasterHeroHeading = styled(H1)`
  @media (max-width: 991px) {
    padding-top: 15vh;
    @media screen and (orientation: landscape) {
      font-size: 2.5rem;
    }
    @media screen and (orientation: portrait) {
      font-size: 3rem;
    }
  }
  @media (min-width: 992px) {
    @media screen and (orientation: landscape) {
      padding-top: 15vh;
      font-size: 3.5rem;
    }
    @media screen and (orientation: portrait) {
      padding-top: 18vh;
      font-size: 4rem;
    }
  }
`;
const ForecasterHeroSubHeading = styled(H3)`
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

export const ForecasterHeroBlock = props => {
  const { title, description } = props;
  return (
    <HeroBlockWithBgImage>
      <Container>
        <Col xl="8">
          <ForecasterHeroHeading light>{title}</ForecasterHeroHeading>
          <ForecasterHeroSubHeading light>
            {description}
          </ForecasterHeroSubHeading>
        </Col>
      </Container>
    </HeroBlockWithBgImage>
  );
};

export default ForecasterHeroBlock;
