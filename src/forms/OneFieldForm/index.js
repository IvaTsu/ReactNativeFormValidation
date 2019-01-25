import React, { Fragment } from 'react';
import { SafeAreaView, Button, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import InputField from './../components/InputField';

const validationSchema = yup.object().shape({
	name: yup
		.string()
		.label('First Name')
		.required()
		.min(2, 'At least 2 characters')
});

export default () => (
	<SafeAreaView>
		<Formik
			initialValues={{ name: '' }}
			// actions should be Formik functions to change state of formikProps
			onSubmit={(values, actions) => {
				// setTimeout just for latency
				setTimeout(() => {
					actions.setSubmitting(false);
				}, 1000);
				alert(JSON.stringify(values));
			}}
			validationSchema={validationSchema}
		>
			{formikProps => (
				<Fragment>
					<InputField
						label="First Name"
						formikProps={formikProps}
						formikKey="name"
						placeholder="John Doe"
						autoFocus
					/>
					{formikProps.isSubmitting ? (
						<ActivityIndicator />
					) : (
						<Button title="Submit" onPress={formikProps.handleSubmit} />
					)}
				</Fragment>
			)}
		</Formik>
	</SafeAreaView>
);
