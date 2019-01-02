import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Layout, ContentSection, GridSection } from 'components/layout';
import {
  H1,
  H2,
  P,
  A,
  Img,
  GridBlock,
  GridImageBlock,
  GridTextBlock,
  HomeHeroBlock,
  Container,
  Col,
  Row,
} from 'components/general';

const GridSectionBackground = styled.div`
  background: url(${props => props.bgImgLink});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const StyledH1 = styled(H1)`
  @media screen and (min-width: 768px) {
    text-align: right !important;
  }
`;
const StyledGridTextBlock = styled(GridTextBlock)`
  padding: 3rem;
`;
const SpecialGridTextBlock = styled(GridTextBlock)`
  padding-top: 5rem;
  padding-left: 3rem;
`;
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

class TestPage extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - TestPage"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        <ContentSection nopadding bgColor="dark">
          <GridSection>
            <GridBlock nopadding>
              <Fade>
                <HomeHeroBlock
                  theme="dark"
                  title="Test Page Header"
                  subtitle="Through Innovations in Physics and AI"
                />
              </Fade>
            </GridBlock>
          </GridSection>
        </ContentSection>
        <ContentSection bgColor="pattern">
          <Container>
            <GridSection>
              <GridBlock>
                <H2 className="text-center">
                  Many Businesses Struggle to Take Full Advantage of Their Data
                  ...
                </H2>
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>

        <ContentSection nopadding bgColor="dark">
          <GridSection gridStart="1200px">
            <GridBlock nopadding>
              <Container>
                <StyledGridTextBlock
                  theme="dark"
                  title="Deep Cast AI"
                  subtitle="We are the AI Ninjas"
                  details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae.
								"
                />
              </Container>
            </GridBlock>
            <StyledGridBlock nopadding>
              <video width="100%" autoPlay loop>
                <source src="/videos/ai-vid.mp4" type="video/mp4" />
              </video>
            </StyledGridBlock>
          </GridSection>
        </ContentSection>

        <ContentSection>
          <Container>
            <GridSection>
              <GridBlock>
                <H2 className="text-center">
                  Many Businesses Struggle to Take Full Advantage of Their Data
                  ...
                </H2>
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>
        <GridSectionBackground bgImgLink="/images/testpage/section-bg.jpg">
          <Container>
            <Row className="align-items-center  mx-auto">
              <Col md="5">
                <StyledH1 light className="text-center">
                  Accessible
                </StyledH1>
              </Col>
              <Col md="1" className="d-none d-md-block">
                <img
                  src="/images/testpage/vertical-separator-slim.png"
                  alt=""
                />
              </Col>
              <Col md="6">
                <P light>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Perspiciatis veritatis magni rem molestias tenetur.
                </P>
              </Col>
            </Row>
          </Container>
        </GridSectionBackground>

        <ContentSection>
          <Container>
            <GridSection>
              <GridBlock>
                <H2 className="text-center">
                  Many Businesses Struggle to Take Full Advantage of Their Data
                  ...
                </H2>
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>

        <GridSectionBackground bgImgLink="/images/testpage/section-bg-fast.jpg">
          <Container>
            <Row className="align-items-center  mx-auto">
              <Col md="5">
                <StyledH1 light className="text-center">
                  Fast
                </StyledH1>
              </Col>
              <Col md="1" className="d-none d-md-block">
                <img
                  src="/images/testpage/vertical-separator-slim.png"
                  alt=""
                />
              </Col>
              <Col md="6">
                <P light>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Perspiciatis veritatis magni rem molestias tenetur.
                </P>
              </Col>
            </Row>
          </Container>
        </GridSectionBackground>
        <ContentSection bgColor="pattern">
          <Container>
            <GridSection>
              <GridBlock>
                <H2 className="text-center">
                  Many Businesses Struggle to Take Full Advantage of Their Data
                  ...
                </H2>
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>
        <GridSectionBackground bgImgLink="/images/testpage/section-bg-accuracy.jpg">
          <Container>
            <Row className="align-items-center  mx-auto">
              <Col md="5">
                <StyledH1 light className="text-center">
                  Accurate
                </StyledH1>
              </Col>
              <Col md="1" className="d-none d-md-block">
                <img
                  src="/images/testpage/vertical-separator-slim.png"
                  alt=""
                />
              </Col>
              <Col md="6">
                <P light>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Perspiciatis veritatis magni rem molestias tenetur.
                </P>
              </Col>
            </Row>
          </Container>
        </GridSectionBackground>

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
              </GridBlock>
            </GridSection>
          </Container>
        </ContentSection>
      </Layout>
    );
  }
}
export default TestPage;
