import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ( { onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: '#FC4F52',
    fontSize: 20,
    fontWeight: '300',
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
  },
  buttonStyle: {
    width: 64,
    marginLeft: 5,
    marginRight: 5,
  },
};

export default Button;
