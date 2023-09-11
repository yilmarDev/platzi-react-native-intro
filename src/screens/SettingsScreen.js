import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';

export const SettingsScreen = (props) => {
  const { navigation } = props;

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
      <Text>Settings Screen</Text>
      <Text>Settings Screen</Text>
      <Text>Settings Screen</Text>
      <Text>Settings Screen</Text>
      <Text>Settings Screen</Text>
      <Text>Settings Screen</Text>
      <Text>Settings Screen</Text>
      {/* <Button title="Go to Home" onPress={() => goToHome()}> */}
      {/* Go to Home */}
      {/* </Button> */}
    </SafeAreaView>
  );
};
