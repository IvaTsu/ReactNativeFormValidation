/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView>
        <Button title="Submit" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
