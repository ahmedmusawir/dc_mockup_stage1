import React from 'react';
import styled from 'styled-components';
import { Layout, ContentSection, GridSection } from 'components/layout';
import {
  H1,
  H4,
  Img,
  GridBlock,
  GridImageBlock,
  GridTextBlock,
  Container,
  HeroBlockCommon,
  Button,
} from 'components/general';
import Fade from 'react-reveal/Fade';

const SpecialGridTextBlock = styled(GridTextBlock)`
  padding-top: 3rem;
  padding-left: 1rem;
  @media (min-width: 700px) {
    padding-left: 3rem;
    padding-right: 2rem;
  }
`;
const ButtonHolder = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;
const GridSectionBackground = styled.div`
  background: url(${props => props.bgImgLink});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 4rem;
  padding-bottom: 4rem;
  @media (min-width: 768px) {
    background: url(${props => props.bgImgLink}) fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
const GridQuoteBox = styled.blockquote`
  padding: 3rem;
  margin: 1rem;
  box-shadow: 3px 3px 8px black;
  background-color: dimgray;

  cite {
    float: right;
    color: white;
  }

  i {
    color: white;
    font-size: 2.5rem;
  }

  h4 {
    margin-top: 1rem;
  }
`;

class Solutions extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - Solutions Page"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        <HeroBlockCommon
          backgroundImg="/images/solutions-header.jpg"
          title="Advanced Stuff"
          description="For operators looking to partner to build cutting edge solutions"
        />
        {/* TEXT & IMAGE BLOCK 1 */}
        <ContentSection bgColor="dimgray">
          <Container>
            <GridSection>
              <GridBlock>
                <GridImageBlock imageLink="https://picsum.photos/600/400?image=2" />
              </GridBlock>
              <GridBlock>
                <SpecialGridTextBlock
                  theme="dark"
                  title="AI Solutions"
                  subtitle="We are the AI Ninjas"
                  details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae.
								"
                />
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>

        {/* TEXT & IMAGE BLOCK 2 WITH PARALAX BACKGROUND */}
        <GridSectionBackground bgImgLink="/images/solution-pg-block-bg.jpg">
          <Container>
            <GridSection>
              <GridBlock>
                <SpecialGridTextBlock
                  theme="dark"
                  title="Deeper Insights"
                  subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                  details="
								Molestias dolores quia sit harum accusamus quaerat repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae.
								"
                />
              </GridBlock>
              <GridBlock>
                <Img src="/images/solution-pg-circle-img.png" alt="" />
              </GridBlock>
            </GridSection>
          </Container>
        </GridSectionBackground>

        {/* TEXT & IMAGE BLOCK 3 */}
        <ContentSection bgColor="dimgray">
          <Container>
            <GridSection>
              <GridBlock>
                <GridImageBlock imageLink="https://picsum.photos/600/400?image=1" />
              </GridBlock>
              <GridBlock>
                <SpecialGridTextBlock
                  theme="dark"
                  title="Optimization"
                  subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  "
                />
                <ButtonHolder>
                  <Button color="danger" className="btn-lg">
                    Request Demo
                  </Button>
                </ButtonHolder>
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>

        {/* CUSTOMER QUOTE BLOCK */}
        <ContentSection bgColor="gray">
          <Container>
            <GridSection>
              <GridBlock>
                <H1 light className="text-center pb-5">
                  What Our Customers Say
                </H1>
              </GridBlock>
            </GridSection>
          </Container>
          <Container>
            <GridSection>
              <GridBlock>
                <GridQuoteBox>
                  <i class="fa fa-quote-left float-left mr-3" />

                  <H4 light className="pb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi ex voluptatibus beatae quas ducimus eveniet, quidem
                    perspiciatis sapiente accusantium vitae veritatis
                  </H4>
                  <i class="fa fa-quote-right float-right ml-3" />

                  <cite>-- Woody Alen</cite>
                </GridQuoteBox>
              </GridBlock>
              <GridBlock>
                <GridQuoteBox>
                  <i class="fa fa-quote-left float-left mr-3" />

                  <H4 light className="pb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi ex voluptatibus beatae quas ducimus eveniet, quidem
                    perspiciatis sapiente accusantium vitae veritatis
                  </H4>
                  <i class="fa fa-quote-right float-right ml-3" />

                  <cite>-- Woody Alen</cite>
                </GridQuoteBox>
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>

        {/* FOLLOWING BLOCKS ARE TO BE DELETED */}
        <ContentSection bgColor="dimgray">
          <Container>
            <GridSection>
              <GridBlock>
                <GridImageBlock imageLink="https://picsum.photos/600/400?image=2" />
              </GridBlock>
              <GridBlock>
                <SpecialGridTextBlock
                  theme="dark"
                  title="AI Solutions"
                  subtitle="We are the AI Ninjas"
                  details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae.
								"
                />
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>
        <GridSectionBackground bgImgLink="/images/testpage/section-bg-fast.jpg">
          <Container>
            <GridSection>
              <GridBlock>
                <SpecialGridTextBlock
                  theme="dark"
                  title="AI Solutions"
                  subtitle="We are the AI Ninjas"
                  details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae.
								"
                />
              </GridBlock>
              <GridBlock>
                <GridImageBlock imageLink="https://picsum.photos/600/400?image=4" />
              </GridBlock>
            </GridSection>
          </Container>
        </GridSectionBackground>
        <ContentSection bgColor="dimgray">
          <Container>
            <GridSection>
              <GridBlock>
                <GridImageBlock imageLink="https://picsum.photos/600/400?image=1" />
              </GridBlock>
              <GridBlock>
                <SpecialGridTextBlock
                  theme="dark"
                  title="Optimization"
                  subtitle="We are the AI Ninjas"
                  details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae.
								"
                />
                <ButtonHolder>
                  <Button color="danger" className="btn-lg">
                    Request Demo
                  </Button>
                </ButtonHolder>
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>
      </Layout>
    );
  }
}

export default Solutions;
