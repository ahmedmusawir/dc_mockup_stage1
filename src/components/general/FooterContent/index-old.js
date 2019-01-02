import React from 'react';
import { Section, ContentSection } from 'components/layout';
import { H4, H5, A, Img, Container, InlineList } from 'components/general';

export const FooterContent = () => {
  return (
    <ContentSection bgColor="dark">
      <Container>
        <Section className="text-center">
          <InlineList>
            <A href="https://www.facebook.com/DeepCastAI" target="_blank">
              <Img src="/images/facebook.png" className="px-2" alt="" />
            </A>
            <A
              href="https://www.linkedin.com/company/deepcastai"
              target="_blank"
            >
              <Img src="/images/linkedin.png" className="px-2" alt="" />
            </A>
            <A
              href="https://www.youtube.com/channel/UCsHk7ru4pxb_CdYPTuVf6_g"
              target="_blank"
            >
              <Img src="/images/youtube.png" className="px-2" alt="" />
            </A>
          </InlineList>
        </Section>

        <A
          href="https://www.google.com/maps/place/800+Town+and+Country+Blvd+%23300,+Houston,+TX+77024"
          target="_blank"
          data-content="https://www.google.com/maps/place/800+Town+and+Country+Blvd+%23300,+Houston,+TX+77024"
          data-type="external"
        >
          <H4 light className="text-center">
            800 Town and Country Blvd, STE 300,&nbsp;Houston, TX 77024
          </H4>
        </A>
        <Section className="text-center">
          <InlineList>
            <A
              className="px-2"
              href="tel:18335003282"
              data-content="18335003282"
              data-type="phone"
            >
              +1 (833) 500-DATA
            </A>
            <A
              className="px-2"
              data-auto-recognition="true"
              data-content="info@deepcast.ai"
              href="mailto:info@deepcast.ai"
              data-type="mail"
            >
              info@deepcast.ai
            </A>
          </InlineList>
          <H5 color="red" className="text-center pt-5 pb-5">
            Copyright © 2018 DeepCast LLC
          </H5>
        </Section>
      </Container>
    </ContentSection>
  );
};

export default FooterContent;
