/**
 *
 * GridSection.js
 *
 * Renders a Content Section with CSS Grid
 */

import styled from 'styled-components';

export const GridSection = styled.section`
  @media screen and (min-width: ${props => props.gridStart}) {
    display: grid;
    grid-gap: 8px;
    grid-gap: ${props => props.gap};
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
    grid-auto-flow: row dense;
    list-style: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 100%;
    max-width: 120rem;
  }
`;

GridSection.defaultProps = {
  gap: '8px',
  gridStart: '760px',
};

export default GridSection;
