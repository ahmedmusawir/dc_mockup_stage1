/**
 *
 * <GridTextBlockSimple />
 *
 * A Text Container with Props
 * Props: title, subtitle etc.
 *
 */
import React from 'react';
import styled from 'styled-components';
import { H1, H2, H4 } from 'components/general';
export const GridTextContainer = styled.div`
  padding-bottom: 0rem;
`;

export const GridTextBlockSimple = props => {
  const { title, subtitle, theme, className } = props;

  if (theme === 'dark') {
    return (
      <GridTextContainer className={className}>
        <H1 light>{title}</H1>
        <H4 light>{subtitle}</H4>
      </GridTextContainer>
    );
  } else {
    return (
      <GridTextContainer className={className}>
        <H1>{title}</H1>
        <H4>{subtitle}</H4>
      </GridTextContainer>
    );
  }
};

GridTextBlockSimple.defaultProps = {
  title: 'Default Title',
  subtitle: '',
  details: '',
};

export default GridTextBlockSimple;
