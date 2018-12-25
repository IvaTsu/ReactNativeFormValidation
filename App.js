/**
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { SafeAreaView } from 'react-native';

import OneFieldForm from './src/forms/OneFieldForm/index';

export default () => (
	<SafeAreaView>
		<Fragment>
			<OneFieldForm />
		</Fragment>
	</SafeAreaView>
);
