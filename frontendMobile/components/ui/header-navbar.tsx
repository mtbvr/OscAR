import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme, globalStyles } from '../../constants/theme';

// Header navigation bar component
const HeaderNavbar = () => (
  <View style={styles.shadowWrapper}>
    <LinearGradient
      colors={[theme.COLORS.primary, theme.COLORS.secondary]}
      start={{ x: -0.15, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.navbar}
    >
      <Text style={[globalStyles.title, styles.title, { fontSize: 30 }]}>LOOTOPIA</Text>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  shadowWrapper: {
    width: '100%',
    shadowColor: theme.COLORS.icon,
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
    fontSize: theme.FONT_SIZES.subtitle,
    fontWeight: '900',
    color: theme.COLORS.background,
  },
});

export default HeaderNavbar;