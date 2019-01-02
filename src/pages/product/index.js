import React from 'react';
import styled from 'styled-components';
import { Layout, ContentSection, GridSection } from 'components/layout';
import {
  H1,
  H4,
  Img,
  GridBlock,
  GridImageBlock,
  GridTextBlockSimple,
  Container,
  HeroBlockCommon,
  Button,
} from 'components/general';
import Fade from 'react-reveal/Fade';

const StyledGridTextBlockSimple = styled(GridTextBlockSimple)`
  padding-top: 2rem;
  padding-left: 1rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-top: 0rem;
    padding-left: 3rem;
    padding-right: 2rem;

    @media screen and (orientation: portrait) {
      h1 {
        font-size: 2rem;
        padding-bottom: 1rem !important;
      }
      h4 {
        font-size: 1.2rem;
      }
    }
  }
  @media (min-width: 1200px) {
    padding-top: 5rem;
    padding-left: 3rem;
    padding-right: 2rem;
  }

  h1 {
    padding-bottom: 2rem;
  }
`;

class Product extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - AboutPage"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        <HeroBlockCommon
          backgroundImg="/images/forecast-header.jpg"
          title="Forcaster Page Title"
          description="Some long subtitle text goes here. It would be a tagline that describes the value of the software"
        />

        {/* TEXT & IMAGE BLOCK 1 */}
        <ContentSection bgColor="dimgray">
          <Container>
            <GridSection>
              <GridBlock>
                <GridImageBlock imageLink="https://picsum.photos/600/400?image=2" />
              </GridBlock>
              <GridBlock>
                <StyledGridTextBlockSimple
                  theme="dark"
                  title="Automatic Forecasting"
                  subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias dolores quia sit harum accusamus quaerat repudiandae."
                />
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>
      </Layout>
    );
  }
}

export default Product;
