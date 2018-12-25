import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, TextInput, Text, Button } from 'react-native';
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
					<Text accessibilityLabel="Email">Email</Text>
					<TextInput
						style={styles.inputField}
						onChangeText={formikProps.handleChange('email')}
						onBlur={formikProps.handleBlur('email')}
					/>
					<Text style={styles.errorText}>{formikProps.errors.email}</Text>

					<Text accessibilityLabel="Password">Password</Text>
					<TextInput
						style={styles.inputField}
						onChangeText={formikProps.handleChange('password')}
						onBlur={formikProps.handleBlur('password')}
					/>
					<Text style={styles.errorText}>{formikProps.errors.password}</Text>

					<Button title="Sign In" onPress={formikProps.handleSubmit} />
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
	errorText: {
		color: 'red'
	}
});
