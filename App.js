/**
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import OneFieldForm from './src/forms/OneFieldForm/index';
import SignIn from './src/forms/SignIn';

const Forms = ({ match }) => (
	<View>
		<Text style={styles.header}>Forms</Text>
		<View>
			<Link to={`${match.url}/one-field-form`} style={styles.subNavItem} underlayColor="#f0f4f7">
				<Text style={styles.item}>A form with one text field</Text>
			</Link>
			<Link to={`${match.url}/sign-in-form`} style={styles.subNavItem} underlayColor="#f0f4f7">
				<Text style={styles.item}>A "Sign in" form</Text>
			</Link>
		</View>

		<Route path={`${match.path}/one-field-form`} component={OneFieldForm} />
		<Route path={`${match.path}/sign-in-form`} component={SignIn} />
		<Route
			exact
			path={match.path}
			render={() => <Text style={styles.form}>Please select a form.</Text>}
		/>
	</View>
);

const App = () => (
	<NativeRouter>
		<View style={styles.container}>
			<Route path="/" component={Forms} />
		</View>
	</NativeRouter>
);

const styles = StyleSheet.create({
	container: {
		marginTop: 25,
		padding: 10
	},
	header: {
		marginVertical: 20,
		fontSize: 20,
		textAlign: 'center'
	},
	item: {
		fontSize: 16
	},
	form: {
		textAlign: 'center',
		fontSize: 15
	},
	subNavItem: {
		padding: 5
	}
});

export default App;
