import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { LoginForm } from './src/components/LoginForm';
// import { Greeting } from './src/components/Greeting';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>New text for Metro</Text> */}

      <LoginForm />

      {/* <Greeting /> */}
      {/* <Greeting lastName={} /> */}
      {/* <Greeting firstName="Maria fernanda" /> */}
      {/* <Greeting firstName="Maria fernanda" lastName="Lopez" /> */}
      {/* <Greeting firstName="Daniel" lastName="lopez" /> */}
      {/* <Greeting firstName="Camilo" lastName="Londoño Arenas" /> */}

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
