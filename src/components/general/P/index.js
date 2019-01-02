import styled from 'styled-components';

export const P = styled.p`
	padding-top: 1rem;
	padding-bottom: 1rem;
	font-family: ${props => props.theme.texts.textFont};
	color: ${props => {
		let color;
		if (props.dark) {
			color = props.theme.colors.textColorDark;
		} else if (props.light) {
			color = props.theme.colors.textColorLight;
		} else {
			color = props.color ? props.color : props.theme.colors.textColorDefault;
		}
		return color;
	}};
	font-size: ${props =>
		props.theme.texts.baseFontSize
			? props.theme.texts.baseFontSize
			: props.size};
`;

P.defaultProps = {
	size: '1rem',
	color: 'grey',
};

export default P;
