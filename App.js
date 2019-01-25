import React, { Component, Fragment } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import OneFieldForm from './src/forms/OneFieldForm/index';
import SignIn from './src/forms/SignIn';
import styles from './styles';

class Forms extends Component {
	state = {
		isActiveOneFieldFormLink: false,
		isActiveSignInFormLink: false
	};

	_handlePressOneFieldForm = () => {
		this.setState({
			isActiveOneFieldFormLink: true,
			isActiveSignInFormLink: false
		});
	};

	_handlePressSignInForm = () => {
		this.setState({
			isActiveOneFieldFormLink: false,
			isActiveSignInFormLink: true
		});
	};

	render() {
		const { match } = this.props;
		const { isActiveOneFieldFormLink, isActiveSignInFormLink } = this.state;
		return (
			<SafeAreaView>
				<Text style={styles.header}>Forms</Text>
				<Fragment>
					<Link
						to={`${match.url}/one-field-form`}
						style={isActiveOneFieldFormLink ? styles.subNavItem__active : styles.subNavItem}
						underlayColor="#f0f4f7"
						onPress={() => this._handlePressOneFieldForm()}
					>
						<Text style={styles.item}>A form with one text field</Text>
					</Link>

					<Link
						to={`${match.url}/sign-in-form`}
						style={isActiveSignInFormLink ? styles.subNavItem__active : styles.subNavItem}
						underlayColor="#f0f4f7"
						onPress={() => this._handlePressSignInForm()}
					>
						<Text style={styles.item}>A "Sign in" form</Text>
					</Link>
				</Fragment>

				<Route path={`${match.path}/one-field-form`} component={OneFieldForm} />
				<Route path={`${match.path}/sign-in-form`} component={SignIn} />
				<Route
					exact
					path={match.path}
					render={() => <Text style={styles.form}>Please select a form.</Text>}
				/>
			</SafeAreaView>
		);
	}
}

const App = () => (
	<NativeRouter>
		<View style={styles.container}>
			<Route path="/" component={Forms} />
		</View>
	</NativeRouter>
);

export default App;
