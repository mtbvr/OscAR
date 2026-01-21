import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderNavbar from '@/components/ui/header-navbar';
import { SafeAreaView } from 'react-native-safe-area-context';

/* Default screen for the Social tab */

export default function SocialScreen() {
    return (
        <SafeAreaView style={styles.container}>
        <HeaderNavbar />
        <View style={styles.content}>
            <Text>Social</Text>
            <Text>Interactions sociales à venir.</Text>
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
