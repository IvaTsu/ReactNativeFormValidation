/**
 * @format
 * @flow
 */

import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { red } from "ansi-colors";

const validationSchema = yup.object().shape({
  name: yup.string().required("Required")
});

export default () => (
  <SafeAreaView>
    <Formik
      initialValues={{ name: "" }}
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
            style={{ borderWidth: 2, margin: 10, padding: 5 }}
            onChangeText={formikProps.handleChange("name")}
          />
          <Text style={{ color: "red" }}>{formikProps.errors.name}</Text>
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
