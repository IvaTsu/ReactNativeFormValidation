import React from 'react';
import { StyleSheet, View, Text, TextInput, Switch } from 'react-native';

const InputField = ({ label, formikProps, formikKey, ...rest }) => {
	const inputField = {
		borderWidth: 2,
		margin: 10,
		padding: 5
	};

	if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
		inputField.borderColor = 'red';
	}

	return (
		<View style={styles.formItem}>
			<Text accessibilityLabel={label}>{label}</Text>
			<TextInput
				onChangeText={formikProps.handleChange(formikKey)}
				onBlur={formikProps.handleBlur(formikKey)}
				style={inputField}
				{...rest}
			/>
			<Text style={styles.errorText}>
				{formikProps.touched[formikKey] && formikProps.errors[formikKey]}
			</Text>
		</View>
	);
};

const SwitchField = ({ label, formikProps, formikKey, ...rest }) => (
	<View style={styles.formItem}>
		<Text accessibilityLabel={label}>{label}</Text>
		<Switch
			value={formikProps.values[formikKey]}
			onValueChange={value => {
				formikProps.setFieldValue(formikKey, value);
			}}
			{...rest}
		/>
		<Text style={styles.errorText}>
			{formikProps.touched[formikKey] && formikProps.errors[formikKey]}
		</Text>
	</View>
);

const styles = StyleSheet.create({
	formItem: {
		marginHorizontal: 20,
		marginVertical: 5
	},
	errorText: {
		color: 'red'
	}
});

export { InputField, SwitchField };
