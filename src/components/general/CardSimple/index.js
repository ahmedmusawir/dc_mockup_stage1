import React from 'react';
import {
	Card as RSCard,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
} from 'reactstrap';
import { LinkButton } from 'components/general';

export const CardSimple = props => {
	const { title, description, thumbnail, link } = props.data.props;

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

export default CardSimple;
