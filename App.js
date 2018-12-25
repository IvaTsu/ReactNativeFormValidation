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
  ActivityIndicator
} from "react-native";
import { Formik } from "formik";

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
    >
      {formikProps => (
        <Fragment>
          <TextInput
            style={{ borderWidth: 2, margin: 10, padding: 5 }}
            onChangeText={formikProps.handleChange("name")}
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
