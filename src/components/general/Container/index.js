/**
 *
 * <Container />
 *
 * A Content Container with Props
 * Props: fluid etc.
 */
import React from 'react';
import { Container as RSContainer } from 'reactstrap';

export const Container = props => {
	const { children } = props;

	return <RSContainer {...props}>{children}</RSContainer>;
};

export default Container;
