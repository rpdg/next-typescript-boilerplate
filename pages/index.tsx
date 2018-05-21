// tslint:disable import-name variable-name
import * as React from 'react';

import { withLayout } from '~/hoc';
import Title from '~/components/Title';

const Index = () => (
	<div>
		<Title>Hello World</Title>
	</div>
);

export default withLayout()(Index);
