import React from 'react';
import { TextInput, Switch } from 'react-native';

import FieldWrapper from './FieldWrapper';

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
		<FieldWrapper label={label} formikProps={formikProps} formikKey={formikKey}>
			<TextInput
				onChangeText={formikProps.handleChange(formikKey)}
				onBlur={formikProps.handleBlur(formikKey)}
				style={inputField}
				{...rest}
			/>
		</FieldWrapper>
	);
};

const SwitchField = ({ label, formikProps, formikKey, ...rest }) => (
	<FieldWrapper label={label} formikProps={formikProps} formikKey={formikKey}>
		<Switch
			value={formikProps.values[formikKey]}
			onValueChange={value => {
				formikProps.setFieldValue(formikKey, value);
			}}
			{...rest}
		/>
	</FieldWrapper>
);

export { InputField, SwitchField };
