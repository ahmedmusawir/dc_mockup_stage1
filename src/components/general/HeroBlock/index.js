import styled from 'styled-components';

export const HeroBlock = styled.section`
	background: ${props =>
		props.theme.backgrounds.backgroundGradient
			? props.theme.backgrounds.backgroundGradient
			: props.bgColor};
`;

HeroBlock.defaultProps = {
	bgColor: 'white',
};

export default HeroBlock;
