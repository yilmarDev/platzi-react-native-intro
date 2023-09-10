import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { LoginForm } from './src/components/LoginForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>New text for Metro</Text>

      <LoginForm />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
