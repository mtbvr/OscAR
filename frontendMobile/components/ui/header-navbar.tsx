import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Header navigation bar component
const HeaderNavbar = () => (
  <View style={styles.shadowWrapper}>
    <LinearGradient
      colors={['#F72C25', '#F7B32B']}
      start={{ x: -0.15, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.navbar}
    >
      <Text style={styles.title}>LOOTOPIA</Text>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  shadowWrapper: {
    width: '100%',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },
  navbar: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 900,
    fontFamily: 'sans-serif',
    color: '#FFFFFF',
  },
});

export default HeaderNavbar;