import React from 'react';
import { View, Text } from 'react-native';
import { theme, globalStyles } from '../../constants/theme';

// Hunt screen

export default function HuntScreen() {
    return (
        <View style={[theme.CONTAINER_STYLES.center, theme.CONTAINER_STYLES.padded]}>
            <Text style={globalStyles.subtitle}>Chasses</Text>
            <Text style={globalStyles.smallText}>Contenu des chasses à venir.</Text>
        </View>
    );
}