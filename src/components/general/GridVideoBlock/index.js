/**
 *
 * <GridVideoBlock />
 *
 * An Image Container with Props
 * Props: src, subtitle etc.
 *
 */
import React from 'react';
import styled from 'styled-components';
import { H3, P } from 'components/general';
export const GridVideoContainer = styled.div`
	padding-bottom: 0rem;
`;

export const GridVideoBlock = props => {
	const { videoId, caption, details, theme } = props;
	const videoLink = `https://www.youtube.com/embed/${videoId}?modestbranding=1&wmode=opaque&autoplay=0&loop=1&controls=0&showinfo=0&rel=0`;

	if (theme === 'dark') {
		return (
			<GridVideoContainer>
				<div className="embed-responsive embed-responsive-16by9 pb-3">
					<iframe
						className="embed-responsive-item"
						src={videoLink}
						allowfullscreen
					/>
				</div>
				<H3 light>{caption}</H3>
				<P light> {details}</P>
			</GridVideoContainer>
		);
	} else {
		return (
			<GridVideoContainer>
				<div className="embed-responsive embed-responsive-16by9 pb-3">
					<iframe
						className="embed-responsive-item"
						src={videoLink}
						allowfullscreen
					/>
				</div>
				<H3>{caption}</H3>
				<P>{details}</P>
			</GridVideoContainer>
		);
	}
};

GridVideoBlock.defaultProps = {
	videoId: '668nUCeBHyY',
	caption: '',
	details: '',
};

export default GridVideoBlock;
