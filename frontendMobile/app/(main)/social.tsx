import React from 'react';
import { View, Text } from 'react-native';
import { theme, globalStyles } from '../../constants/theme';

// Social screen component

export default function SocialScreen() {
    return (
        <View style={[theme.CONTAINER_STYLES.center, theme.CONTAINER_STYLES.padded]}>
            <Text style={globalStyles.subtitle}>Social</Text>
            <Text style={globalStyles.smallText}>Interactions sociales à venir.</Text>
        </View>
    );
}
