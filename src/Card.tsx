import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Card() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>PET TEC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 50,
    backgroundColor: "red",
    marginVertical: 15,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});