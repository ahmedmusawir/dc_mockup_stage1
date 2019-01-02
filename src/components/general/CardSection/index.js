import React from 'react';
import { Card } from 'components/general';

export class CardSection extends React.Component {
	getArticles = data => {
		const articles = [];
		data.map(d => {
			articles.push(<Card key={d.id} data={d} />);
		});
		return articles;
	};

	render() {
		const data = this.props.data;

		return this.getArticles(data);
	}
}
export default CardSection;
