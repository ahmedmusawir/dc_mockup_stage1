import React from 'react';
import {
	Card as RSCard,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
} from 'reactstrap';
import { LinkButton, Col } from 'components/general';

export const Card = props => {
	const { title, description, thumbnail, link } = props.data.props;

	return (
		<Col sm="6" md="4" lg="4" className="mb-5">
			<RSCard>
				<CardImg top width="100%" src={thumbnail} alt="Deep Cast Rocks!" />
				<CardBody>
					<CardTitle>{title}</CardTitle>
					<CardText>{description}</CardText>
					<LinkButton link={link}>Read More</LinkButton>
				</CardBody>
			</RSCard>
		</Col>
	);
};

export default Card;
