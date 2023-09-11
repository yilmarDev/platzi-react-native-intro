import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';

import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      <NavigationTab />
    </NavigationContainer>
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
