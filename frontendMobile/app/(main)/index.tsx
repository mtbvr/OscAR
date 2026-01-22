import React from 'react';
import { View, Text } from 'react-native';
import { theme, globalStyles } from '../../constants/theme';

// Maps screen component

export default function MapsScreen() {
  return (
    <View style={[theme.CONTAINER_STYLES.center, theme.CONTAINER_STYLES.padded]}>
      <Text style={globalStyles.subtitle}>Maps</Text>
      <Text style={globalStyles.smallText}>Carte et exploration à venir.</Text>
    </View>
  );
}
