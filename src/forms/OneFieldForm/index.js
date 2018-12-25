import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Button, ActivityIndicator, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
	name: yup.string().required('Required')
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
					<TextInput
						style={styles.inputField}
						onChangeText={formikProps.handleChange('name')}
						onBlur={formikProps.handleBlur('name')}
					/>
					<Text style={styles.errorText}>{formikProps.errors.name}</Text>
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
	errorText: {
		color: 'red'
	}
});
