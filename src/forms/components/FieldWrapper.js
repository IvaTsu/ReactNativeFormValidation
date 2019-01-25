import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
	<View style={styles.formItem}>
		<Text accessibilityLabel={label}>{label}</Text>
		{children}
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

export default FieldWrapper;
