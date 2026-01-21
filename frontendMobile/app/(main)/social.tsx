import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Social screen component

export default function SocialScreen() {
    return (
        <View style={styles.content}>
            <Text style={styles.title}>Social</Text>
            <Text style={styles.subtitle}>Interactions sociales à venir.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
