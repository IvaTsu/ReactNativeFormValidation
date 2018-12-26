import React, { Fragment } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	ActivityIndicator,
	View,
	TextInput,
	Text,
	Button
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validateSchema = yup.object().shape({
	email: yup
		.string()
		.label('Email')
		.email()
		.required(),
	password: yup
		.string()
		.label('Password')
		.required()
		.min(8, 'The lenght should be > 8')
});

export default () => (
	<SafeAreaView>
		<Formik
			initialValues={{ email: '', password: '' }}
			onSubmit={(values, actions) => {
				alert(JSON.stringify(values));
				setTimeout(() => {
					actions.setSubmitting(false);
				}, 1000);
			}}
			validationSchema={validateSchema}
		>
			{formikProps => (
				<Fragment>
					<View style={styles.formItem}>
						<Text accessibilityLabel="Email">Email</Text>
						<TextInput
							style={styles.inputField}
							placeholder="email@example.com"
							onChangeText={formikProps.handleChange('email')}
							onBlur={formikProps.handleBlur('email')}
							autoFocus
						/>
						<Text style={styles.errorText}>
							{formikProps.touched.email && formikProps.errors.email}
						</Text>
					</View>

					<View style={styles.formItem}>
						<Text accessibilityLabel="Password">Password</Text>
						<TextInput
							style={styles.inputField}
							placeholder="password"
							onChangeText={formikProps.handleChange('password')}
							onBlur={formikProps.handleBlur('password')}
							secureTextEntry
						/>
						<Text style={styles.errorText}>
							{formikProps.touched.password && formikProps.errors.password}
						</Text>
					</View>
					{formikProps.isSubmitting ? (
						<ActivityIndicator />
					) : (
						<Button title="Sign In" onPress={formikProps.handleSubmit} />
					)}
				</Fragment>
			)}
		</Formik>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	inputField: {
		borderWidth: 2,
		margin: 10,
		padding: 5
	},
	formItem: {
		marginHorizontal: 20,
		marginVertical: 5
	},
	errorText: {
		color: 'red'
	}
});
