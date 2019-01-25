import React, { Component, Fragment } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import OneFieldForm from './src/forms/FirstName';
import SignIn from './src/forms/SignIn';
import SignUp from './src/forms/SignUp';

import styles from './styles';

class Forms extends Component {
	state = {
		isActiveOneFieldFormLink: false,
		isActiveSignInFormLink: false,
		isActiveSignUpFormLink: false
	};

	_handlePressOneFieldForm = () => {
		this.setState({
			isActiveOneFieldFormLink: true,
			isActiveSignInFormLink: false,
			isActiveSignUpFormLink: false
		});
	};

	_handlePressSignInForm = () => {
		this.setState({
			isActiveOneFieldFormLink: false,
			isActiveSignInFormLink: true,
			isActiveSignUpFormLink: false
		});
	};

	_handlePressSignUpForm = () => {
		this.setState({
			isActiveOneFieldFormLink: false,
			isActiveSignInFormLink: false,
			isActiveSignUpFormLink: true
		});
	};

	render() {
		const { match } = this.props;
		const { isActiveOneFieldFormLink, isActiveSignInFormLink, isActiveSignUpFormLink } = this.state;
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

					<Link
						to={`${match.url}/sign-up-form`}
						style={isActiveSignUpFormLink ? styles.subNavItem__active : styles.subNavItem}
						underlayColor="#f0f4f7"
						onPress={() => this._handlePressSignUpForm()}
					>
						<Text style={styles.item}>A "Sign up" form</Text>
					</Link>
				</Fragment>

				<Route path={`${match.path}/one-field-form`} component={OneFieldForm} />
				<Route path={`${match.path}/sign-in-form`} component={SignIn} />
				<Route path={`${match.path}/sign-up-form`} component={SignUp} />
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
