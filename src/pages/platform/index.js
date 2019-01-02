import React from 'react';
import styled from 'styled-components';
import { Layout, ContentSection, GridSection } from 'components/layout';
import {
  Img,
  GridBlock,
  GridTextBlock,
  Container,
  HeroBlockCommon,
  Button,
} from 'components/general';

// const PageBackground = styled.div`
//   // background: ${props => props.bgColor};
//   background: dimgray !important;
// `;

const StyledGridBlock = styled(GridBlock)`
  line-height: 0 !important;
  position: relative;
`;
const StyledImg = styled(Img)`
  box-shadow: 3px 3px 5px black;
  @media screen and (max-width: 992px) {
    margin-top: 3rem;
  }
  @media screen and (min-width: 992px) {
    position: absolute;
    z-index: 1000;
    max-width: 100%;
    top: 70px;
    left: 0;
  }
`;
const SpecialGridTextBlock = styled(GridTextBlock)`
  padding-top: 5rem;
  padding-left: 3rem;
`;
const ButtonHolder = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

class Platform extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - Platform Page"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        <HeroBlockCommon
          backgroundImg="/images/platform-header.jpg"
          title="Platform Page Title"
          description="Some long subtitle text goes here. It would be a tagline that describes the value of the software"
        />
        <ContentSection bgColor="light" nopadding>
          <Container>
            <GridSection>
              <StyledGridBlock nopadding>
                <StyledImg
                  src="/images/testpage/servers.png"
                  alt=""
                  className="img-fluid"
                />
              </StyledGridBlock>
              <GridBlock nopadding>
                <SpecialGridTextBlock
                  title="Deep Cast AI"
                  subtitle="We are the AI Ninjas"
                  details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae.
								"
                />
                <ButtonHolder>
                  <Button color="danger">Request Demo</Button>
                </ButtonHolder>
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>
      </Layout>
    );
  }
}

export default Platform;
