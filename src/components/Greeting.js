import { View, Text } from 'react-native';
import React from 'react';

export const Greeting = (props) => {
  const { firstName, lastName } = props;

  return (
    <View>
      <Text>
        Hi, {firstName} {lastName}
      </Text>
    </View>
  );
};

Greeting.defaultProps = { firstName: 'John', lastName: 'Smith' };
