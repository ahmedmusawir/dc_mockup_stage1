/**
 *
 * <Content />
 *
 * A Simple Content block with Props
 * Props: sm md lg xl etc.
 *
 */
import React from 'react';
import { Col, Img, Card } from 'components/general';

const getArticles = data => {
	const articles = [];
	data.map(d => {
		if (d.component === 'Img') {
			articles.push(
				<Col sm="6" md="4" lg="4" className="mb-4">
					<Img key={d.id} src={d.props.image} alt="" className="img-fluid" />
				</Col>,
			);
		}
		if (d.component === 'Card') {
			articles.push(<Card key={d.id} data={d} />);
		}
	});
	return articles;
};

export const Content = props => {
	const { data } = props;
	return getArticles(data);
};

export default Content;
