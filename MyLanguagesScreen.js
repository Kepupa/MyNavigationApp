import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyLanguagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Мои языки программирования:</Text>
      <Text style={styles.text}>JavaScript, Python, PHP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default MyLanguagesScreen;
