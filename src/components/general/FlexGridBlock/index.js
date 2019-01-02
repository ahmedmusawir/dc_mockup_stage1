import styled from 'styled-components';

export const FlexGridBlock = styled.div`
	flex-basis: 33%;
	@media (min-width: 761px) and (max-width: 1023px) {
		flex-basis: 50%;
	}
`;

export default FlexGridBlock;
