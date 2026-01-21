import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Profil screen

export default function ProfilScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push('/')}
          activeOpacity={0.7}
        >
            <Ionicons name="arrow-back" size={24} color="#393939" />
            <Text style={styles.backText}>Retour</Text>
        </TouchableOpacity>
        
        <View style={styles.content}>
            <Text style={styles.title}>Profil</Text>
            <Text style={styles.subtitle}>Écran profil utilisateur à implémenter.</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  backText: {
    fontSize: 16,
    color: '#393939',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1f1f1f',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});
