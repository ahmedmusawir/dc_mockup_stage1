import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';
import { ContentSection, Section } from 'components/layout';
import {
	Container,
	Row,
	Col,
	H1,
	H2,
	H3,
	P,
	Img,
	CardSection,
	Content,
	ContentMasonry,
	HomeHeroBlock,
} from 'components/general';

export class PageContent extends Component {
	render() {
		let template = <section />;
		const data = this.props.data;
		switch (this.props.data.component) {
			case 'HomeHeroBlock':
				template = <HomeHeroBlock title={data.props.tagline} />;
				break;
			case 'DoubleSection':
				template = (
					<ContentSection bgColor={data.props.theme}>
						<Container>
							<Row>
								<Col
									sm="6"
									md="6"
									lg="6"
									className={data.props.reverse ? 'order-last' : 'order-first'}
								>
									<H3>{data.props.left.props.title}</H3>
									<P>{data.props.left.props.description}</P>
								</Col>
								<Col sm="6" md="6" lg="6">
									<Img
										src={data.props.right.props.image}
										alt=""
										className="img-fluid mb-5"
									/>
								</Col>
							</Row>
						</Container>
					</ContentSection>
				);
				break;
			case 'CardSection':
				template = (
					<ContentSection bgColor={data.props.theme}>
						<Container>
							<Row>
								<CardSection data={data.cards} />
							</Row>
						</Container>
					</ContentSection>
				);
				break;
			case 'TripleSection':
				template = (
					<ContentSection bgColor={data.props.theme}>
						<H2 light className="text-center mb-5 pb-3">
							{data.tag}
						</H2>
						<Container>
							<Row>
								<Col
									sm="6"
									md="4"
									lg="4"
									className={data.props.reverse ? 'order-last' : 'order-first'}
								>
									<Section className="px-2">
										<H1 light>{data.props.left.props.title}</H1>
										<P>{data.props.left.props.description}</P>
									</Section>
								</Col>
								<Col sm="6" md="4" lg="4" xs="12">
									<Img
										src={data.props.middle.props.image}
										alt=""
										className="img-fluid mb-4"
									/>
								</Col>
								<Col
									sm="6"
									md="4"
									lg="4"
									className={data.props.reverse ? 'order-first' : 'order-last'}
								>
									<Section className="px-2">
										<H3 light>{data.props.left.props.title}</H3>
										<P>{data.props.left.props.description}</P>
									</Section>
								</Col>
							</Row>
						</Container>
					</ContentSection>
				);
				break;
			case 'BlockSection':
				template = (
					<Container className="mt-5 mb-5">
						<H3 className="text-center mb-5 mt-5">{data.tag}</H3>
						<Row>{/* <Content data={data.props.blocks} /> */}</Row>
					</Container>
				);

				break;
			case 'MasonrySection':
				template = (
					<ContentSection bgColor={data.props.theme}>
						<Container className="mt-5 mb-5">
							<H3 className="text-center mb-5 mt-5">{data.tag}</H3>
							<CardColumns>
								<ContentMasonry data={data.props.blocks} />
							</CardColumns>
						</Container>
					</ContentSection>
				);

				break;
			default:
				return '<div />';
		}
		return template;
	}
}
export default PageContent;
