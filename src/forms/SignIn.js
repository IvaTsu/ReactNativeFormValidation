import React, { Fragment } from 'react';
import { SafeAreaView, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validateSchema = yup.object().shape({});

export default () => (
	<SafeAreaView>
		<Fragment>
			<Formik validationSchema={validateSchema}>{formikProps => <Button title="Sign In" />}</Formik>
		</Fragment>
	</SafeAreaView>
);
