/**
 *
 * <TeamMemberBlock />
 *
 * A Member Image and Info Container with Props
 * Props: src, subtitle etc.
 *
 */
import React from 'react';
import styled from 'styled-components';
import { H3, H4, P, A, Img } from 'components/general';
export const GridImageContainer = styled.div`
  padding: 0rem;
`;
export const GridImage = styled.img`
  width: 100%;
  border-radius: 50%;
  padding: 5rem;
`;
export const TeamMemberBlock = props => {
  const { imageLink, alt, caption, details, theme, socialLink } = props;

  if (theme === 'dark') {
    return (
      <GridImageContainer>
        <GridImage src={imageLink} alt={alt} className="img-fluid" />
        <H3 className="text-center" light>
          {caption}
        </H3>
        <H4 className="text-center" light>
          {details}
        </H4>
        <P className="text-center">
          <A src={socialLink} target="_blank">
            <Img src="/images/linkedin-dark.png" alt="LinkedIn" />
          </A>
        </P>
      </GridImageContainer>
    );
  } else {
    return (
      <GridImageContainer>
        <GridImage src={imageLink} alt={alt} className="img-fluid" />
        <H3 className="text-center">{caption}</H3>
        <H4 className="text-center">{details}</H4>
        <P className="text-center">
          <A href={socialLink} target="_blank">
            <Img src="/images/linkedin-dark.png" alt="LinkedIn" />
          </A>
        </P>
      </GridImageContainer>
    );
  }
};

TeamMemberBlock.defaultProps = {
  imageLink: 'https://via.placeholder.com/525x300',
  alt: 'Deep Cast',
  caption: '',
  details: '',
  socalLink: 'https://linkedin.com',
};

export default TeamMemberBlock;
