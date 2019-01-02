import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { ContentSection, GridSection, Layout } from 'components/layout';
import {
  Container,
  GridBlock,
  GridTextBlock,
  TeamMemberBlock,
  FlexGridSection,
  FlexGridBlock,
} from 'components/general';

class AboutPage extends React.Component {
  render() {
    return (
      <Layout
        title="Deep Cast - AboutPage"
        description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
      >
        <ContentSection nopadding bgColor="dark">
          <Container>
            <GridSection>
              <Fade>
                <GridBlock nopadding>
                  <GridTextBlock
                    theme="dark"
                    title="Our Mission"
                    subtitle="To help the industrial sector thrive through the application of data-driven processes and cutting-edge AI technologies."
                    className="text-center pt-5"
                  />
                </GridBlock>
              </Fade>
            </GridSection>
          </Container>
        </ContentSection>

        <ContentSection bgColor="pattern">
          <Container>
            <FlexGridSection>
              <FlexGridBlock size="custom">
                <Zoom>
                  <TeamMemberBlock
                    imageLink="/images/hector.png"
                    alt="Core Team Members"
                    caption="Hector Klie"
                    details="CEO, Lead Data Scientist"
                    socialLink="https://linkedin.com"
                  />
                </Zoom>
              </FlexGridBlock>
              <FlexGridBlock size="custom">
                <Zoom>
                  <TeamMemberBlock
                    imageLink="/images/arturo.png"
                    alt="Core Team Members"
                    caption="Arturo Klie"
                    details="Sr. Software Engineer"
                    socialLink="https://linkedin.com"
                  />
                </Zoom>
              </FlexGridBlock>
              <FlexGridBlock size="custom">
                <Zoom>
                  <TeamMemberBlock
                    imageLink="/images/duc_le.png"
                    alt="Core Team Members"
                    caption="Duc Le"
                    details="Sr. Reservoir Engineer, Software Engineer"
                    socialLink="https://linkedin.com"
                  />
                </Zoom>
              </FlexGridBlock>
              <FlexGridBlock size="custom">
                <Zoom>
                  <TeamMemberBlock
                    imageLink="/images/duc_vuong.png"
                    alt="Core Team Members"
                    caption="Duc Vuong"
                    details="Petroleum Engineer"
                    socialLink="https://linkedin.com"
                  />
                </Zoom>
              </FlexGridBlock>
              <FlexGridBlock size="custom">
                <Zoom>
                  <TeamMemberBlock
                    imageLink="/images/wei_ma.png"
                    alt="Core Team Members"
                    caption="Wei Ma"
                    details="Petroleum Engineer"
                    socialLink="https://linkedin.com"
                  />
                </Zoom>
              </FlexGridBlock>
            </FlexGridSection>
          </Container>
        </ContentSection>

        <ContentSection bgColor="grey">
          <Container>
            <FlexGridSection>
              <FlexGridBlock size="custom">
                <Zoom>
                  <TeamMemberBlock
                    imageLink="/images/hector.png"
                    alt="Core Team Members"
                    caption="Hector Klie"
                    details="CEO, Lead Data Scientist"
                    socialLink="https://linkedin.com"
                  />
                </Zoom>
              </FlexGridBlock>
              <FlexGridBlock size="custom">
                <Zoom>
                  <TeamMemberBlock
                    imageLink="/images/arturo.png"
                    alt="Core Team Members"
                    caption="Arturo Klie"
                    details="Sr. Software Engineer"
                    socialLink="https://linkedin.com"
                  />
                </Zoom>
              </FlexGridBlock>
              <FlexGridBlock size="custom">
                <Zoom>
                  <TeamMemberBlock
                    imageLink="/images/duc_le.png"
                    alt="Core Team Members"
                    caption="Duc Le"
                    details="Sr. Reservoir Engineer, Software Engineer"
                    socialLink="https://linkedin.com"
                  />
                </Zoom>
              </FlexGridBlock>
              <FlexGridBlock size="custom">
                <Zoom>
                  <TeamMemberBlock
                    imageLink="/images/duc_vuong.png"
                    alt="Core Team Members"
                    caption="Duc Vuong"
                    details="Petroleum Engineer"
                    socialLink="https://linkedin.com"
                  />
                </Zoom>
              </FlexGridBlock>
              <FlexGridBlock size="custom">
                <Zoom>
                  <TeamMemberBlock
                    imageLink="/images/wei_ma.png"
                    alt="Core Team Members"
                    caption="Wei Ma"
                    details="Petroleum Engineer"
                    socialLink="https://linkedin.com"
                  />
                </Zoom>
              </FlexGridBlock>
            </FlexGridSection>
          </Container>
        </ContentSection>
      </Layout>
    );
  }
}
export default AboutPage;
