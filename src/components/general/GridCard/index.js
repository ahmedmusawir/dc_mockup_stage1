import React from 'react';
import styled from 'styled-components';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { LinkButton } from 'components/general';

const RSCard = styled(Card)`
	display: block;
	height: 100%;
	box-shadow: 3px 3px 10px grey;
	@media screen and (max-width: 759px) {
		margin-bottom: 2rem;
	}
`;
export const GridCard = props => {
	const { title, description, thumbnail, link } = props;

	return (
		<RSCard>
			<CardImg top width="100%" src={thumbnail} alt="Deep Cast Rocks!" />
			<CardBody>
				<CardTitle>{title}</CardTitle>
				<CardText>{description}</CardText>
				<LinkButton link={link}>Read More</LinkButton>
			</CardBody>
		</RSCard>
	);
};

export default GridCard;
