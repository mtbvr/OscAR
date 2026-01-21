import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot, useRouter, usePathname } from 'expo-router';
import HeaderNavbar from '../../components/ui/header-navbar';
import BottomNavbar from '../../components/ui/bottom-navbar';

// Main layout component wrapping all screens with header and bottom navigation

export default function MainLayout() {
    const router = useRouter();
    const pathname = usePathname();

    // Define the correct routing behavior based on user session or not (connected or not)
    const handleNavigate = (route: any) => {
        if (route === '/connexion' || route === '/profil') {
        router.push(route);
        } else {
        router.replace(route);}
    };

    // Render the layout with header, content slot, and bottom navigation
    return (
        <SafeAreaView style={styles.container}>
        <HeaderNavbar />
            <View style={styles.content}>
                <Slot />
            </View>
        <BottomNavbar currentRoute={pathname} onNavigate={handleNavigate} />
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
