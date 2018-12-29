import React, { Fragment } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	TextInput,
	Button,
	ActivityIndicator,
	View,
	Text
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

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
					<View style={styles.formItem}>
						<Text accessibilityLabel="Name">First Name</Text>
						<TextInput
							onChangeText={formikProps.handleChange('name')}
							onBlur={formikProps.handleBlur('name')}
							style={
								formikProps.touched.name && formikProps.errors.name
									? styles.inputFieldError
									: styles.inputField
							}
							placeholder="John"
							autoFocus
						/>
						<Text style={styles.errorText}>
							{formikProps.touched.name && formikProps.errors.name}
						</Text>
					</View>
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
	inputFieldError: {
		borderWidth: 2,
		margin: 10,
		padding: 5,
		borderColor: 'red'
	},
	errorText: {
		color: 'red'
	}
});
