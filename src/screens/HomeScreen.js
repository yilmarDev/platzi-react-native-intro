import { View, Text, Button } from 'react-native';
import React from 'react';

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate('Settings');
  };
  return (
    <View>
      <Text>Estamos en el home</Text>
      <Text>Estamos en el home</Text>
      <Text>Estamos en el home</Text>
      <Text>Estamos en el home</Text>
      <Text>Estamos en el home</Text>
      <Text>Estamos en el home</Text>
      <Text>Estamos en el home</Text>
      <Text>Estamos en el home</Text>
      <Text>Estamos en el home</Text>
      <Text>Estamos en el home</Text>
      <Button onPress={goToSettings} title="Go to settings" />
    </View>
  );
}
