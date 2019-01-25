import React, { Fragment } from 'react';
import { SafeAreaView, ActivityIndicator, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import InputField from './components/InputField';

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
