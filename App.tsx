import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Card from './src/Card'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo</Text>
      <StatusBar style="dark" />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    padding: 20,
    marginBottom: 40,
    paddingTop: 80,
  },
});
