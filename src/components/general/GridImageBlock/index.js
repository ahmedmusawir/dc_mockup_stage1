/**
 *
 * <GridImageBlock />
 *
 * An Image Container with Props
 * Props: src, subtitle etc.
 *
 */
import React from 'react';
import styled from 'styled-components';
import { H3, P, Img } from 'components/general';
export const GridImageContainer = styled.div`
	padding: 0rem;
`;
export const GridImage = styled(Img)`
	width: 100%;
`;
export const GridImageBlock = props => {
	const { imageLink, alt, caption, details, theme } = props;

	if (!caption && !details) {
		return (
			<GridImageContainer>
				<GridImage src={imageLink} alt={alt} />
			</GridImageContainer>
		);
	}

	if (theme === 'dark') {
		return (
			<GridImageContainer>
				<GridImage src={imageLink} alt={alt} className="pb-5" />
				<H3 className="text-center" light>
					{caption}
				</H3>
				<P className="text-center" light>
					{details}
				</P>
			</GridImageContainer>
		);
	} else {
		return (
			<GridImageContainer>
				<GridImage src={imageLink} alt={alt} className="pb-5" />
				<H3 className="text-center">{caption}</H3>
				<P className="text-center">{details}</P>
			</GridImageContainer>
		);
	}
};

GridImageBlock.defaultProps = {
	imageLink: 'https://via.placeholder.com/525x300',
	alt: 'Deep Cast',
	caption: '',
	details: '',
};

export default GridImageBlock;
