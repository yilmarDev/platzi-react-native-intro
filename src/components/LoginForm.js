import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React from 'react';

export const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form</Text>
      <Text>Please write your username and your password</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button title="Login" onPress={() => console.log('Login in progress')} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#EFEFEF',
    padding: '24px',
  },
});
