/**
 *
 * <Content />
 *
 * A Simple Content block with Props
 * Props: sm md lg xl etc.
 *
 */
import React from 'react';
import { Col, Img, CardSimple } from 'components/general';

const getArticles = data => {
	const articles = [];
	data.map(d => {
		if (d.component === 'Card') {
			articles.push(<CardSimple key={d.id} data={d} />);
		}
	});
	return articles;
};

export const ContentMasonry = props => {
	const { data } = props;
	return getArticles(data);
};

export default ContentMasonry;
