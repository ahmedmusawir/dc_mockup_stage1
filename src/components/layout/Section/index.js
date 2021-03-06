import styled from 'styled-components';

export const Section = styled.section`
	background: ${props => {
		let bgColor;
		if (props.bgColor === 'dark') {
			bgColor = props.theme.backgroundGradiant;
		} else if (props.bgColor === 'grey') {
			bgColor = props.theme.backgroundGrey;
		} else if (props.bgColor === 'light') {
			bgColor = props.theme.backgroundImage;
		} else {
			bgColor = props.bgColor;
		}
		return bgColor;
	}};
	min-height: 10vh;
`;

export default Section;
