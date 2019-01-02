/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

export const A = styled.a`
	font-family: ${props =>
		props.theme.texts.textFont ? props.theme.texts.textFont : props.font};
	color: ${props =>
		props.theme.colors.infoColor ? props.theme.colors.infoColor : props.color};

	&:hover {
		color: ${props => props.theme.colors.dangerColor};
	}
	font-size: ${props =>
		props.theme.texts.baseFontSize
			? props.theme.texts.baseFontSize
			: props.size};
	text-decoration: none !important;
`;

A.defaultProps = {
	size: '1rem',
	color: 'dodgerblue',
	font: 'arial',
};

export default A;
