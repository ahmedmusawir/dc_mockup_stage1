import React, { Component } from 'react';
import Link from 'next/link';
import { Button } from 'components/general';

export const LinkButton = props => {
	const { link, children } = props;
	return (
		<Link href={link}>
			<Button {...props}>{children}</Button>
		</Link>
	);
};

export default LinkButton;
