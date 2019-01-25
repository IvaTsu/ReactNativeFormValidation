import React, { Fragment } from 'react';
import { SafeAreaView, ActivityIndicator, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { InputField, SwitchField } from './components/InputFields';

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
		.min(8, 'The lenght should be > 8'),
	confirmPassword: yup
		.string()
		.label('Confirm password')
		.required()
		.test('passwords-match', 'Passwords must mutch', function(value) {
			return this.parent.password === value;
		}),
	agreeToTermsAndConditions: yup
		.boolean()
		.label('Agree to Terms and Conditions')
		.test('is-true', 'Must agree with Terms', value => value === true)
});

export default () => (
	<SafeAreaView>
		<Formik
			initialValues={{
				email: '',
				password: '',
				confirmPassword: '',
				agreeToTermsAndConditions: false
			}}
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
					<InputField
						label="Email"
						formikProps={formikProps}
						formikKey="email"
						placeholder="email@example.com"
						autoFocus
					/>

					<InputField
						label="Password"
						formikProps={formikProps}
						formikKey="password"
						placeholder="password"
						secureTextEntry
					/>

					<InputField
						label="Confirm Password"
						formikProps={formikProps}
						formikKey="confirmPassword"
						placeholder="confirm password"
						secureTextEntry
					/>

					<SwitchField
						label="Agree to Terms and Conditions"
						formikProps={formikProps}
						formikKey="agreeToTermsAndConditions"
					/>

					{formikProps.isSubmitting ? (
						<ActivityIndicator />
					) : (
						<Button title="Sign Up" onPress={formikProps.handleSubmit} />
					)}
				</Fragment>
			)}
		</Formik>
	</SafeAreaView>
);
