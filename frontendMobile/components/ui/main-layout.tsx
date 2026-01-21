import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavbar from './header-navbar';
import BottomNavbar from './bottom-navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

// Main layout component wrapping all screens with header and bottom navigation
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavbar />
      <View style={styles.content}>
        {children}
      </View>
      <BottomNavbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
  content: {
    flex: 1,
  },
});
