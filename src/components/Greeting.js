import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

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

Greeting.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
