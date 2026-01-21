import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavbar from '@/components/ui/header-navbar';

/* Connexion screen */

export default function ConnexionScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <HeaderNavbar />
        <View style={styles.content}>
            <Text>Connexion</Text>
            <Text>Ecran de connexion à implémenter.</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
  },
  content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
});
