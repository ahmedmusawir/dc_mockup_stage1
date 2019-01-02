/**
 *
 * ContentSection.js
 *
 * Renders a Content Section with styles and props
 */

import styled from 'styled-components';

export const ContentSection = styled.section`
  background: ${props => {
    let bgColor;
    if (props.bgColor === 'dark') {
      bgColor = props.theme.backgrounds.backgroundGradient;
    } else if (props.bgColor === 'light') {
      bgColor = props.theme.backgrounds.backgroundlight;
    } else if (props.bgColor === 'grey') {
      bgColor = props.theme.backgrounds.backgroundGrey;
    } else if (props.bgColor === 'pattern') {
      bgColor = props.theme.backgrounds.backgroundPattern;
    } else {
      bgColor = props.bgColor;
    }
    return bgColor;
  }};
  padding: ${props => (props.nopadding ? '0rem 0rem' : '4rem 0rem;')};
`;

export default ContentSection;
