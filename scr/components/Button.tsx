import React from 'react';
import { 
  Text, 
  StyleSheet,
  TouchableOpacity, 
  TouchableOpacityProps, 
} from 'react-native';

interface ButttonProps extends TouchableOpacityProps {}

export function Button({ onPress }: ButttonProps) {
  return (
    <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
      >
      <Text 
        onPress={onPress}
        style={styles.buttonText}
      >
        Add
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#A370F7',
  },
  buttonText: {
    fontSize: 17,
    color: '#ffffff',
    fontWeight: 'bold'
  },
});
