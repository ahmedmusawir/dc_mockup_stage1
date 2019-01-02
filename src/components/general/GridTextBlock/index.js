/**
 *
 * <GridTextBlock />
 *
 * A Text Container with Props
 * Props: title, subtitle etc.
 *
 */
import React from 'react';
import styled from 'styled-components';
import { H1, H3, P } from 'components/general';
export const GridTextContainer = styled.div`
	padding-bottom: 0rem;
`;

export const GridTextBlock = props => {
	const { title, subtitle, details, theme, className } = props;

	if (theme === 'dark') {
		return (
			<GridTextContainer className={className}>
				<H1 light>{title}</H1>
				<H3 light>{subtitle}</H3>
				<P light> {details}</P>
			</GridTextContainer>
		);
	} else {
		return (
			<GridTextContainer className={className}>
				<H1>{title}</H1>
				<H3>{subtitle}</H3>
				<P>{details}</P>
			</GridTextContainer>
		);
	}
};

GridTextBlock.defaultProps = {
	title: 'Default Title',
	subtitle: '',
	details: '',
};

export default GridTextBlock;
