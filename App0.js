import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { OctoCat } from './components/assets/octocat.jsx'
import { RecordVoice } from './components/record.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ "fontSize": "2em", "color": "purple" }}>Talk to me! 🐈</Text>
      <RecordVoice />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fee",
    alignItems: "center",
    justifyContent: "center",
  },
});
