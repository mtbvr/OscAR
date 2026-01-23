import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { theme } from '../../constants/theme';
import PlaceholderNotConnected from '../../components/placeholder-not-connected';
import { router } from 'expo-router';
import { Asset } from 'expo-asset';
import { SvgUri } from 'react-native-svg';

// Icon mapping
const ICONS = {
    "trophy.svg": require('../../assets/icon/trophy.svg'),
} as const;

// Define the type for the keys of ICONS
type IconName = keyof typeof ICONS;

// Function to get the URI of the SVG icon
function getIconUri(iconName: IconName): string {
    const iconSource = ICONS[iconName];
    if (!iconSource) {
        console.error(`Icon "${iconName}" not found in ICONS mapping.`);
        return '';
    }
    return Asset.fromModule(iconSource).uri || '';
}

// Social screen
export default function SocialScreen() {
    const { isAuthenticated } = useAuth();

    return (
        <View style={{ backgroundColor: theme.COLORS.background, paddingTop: theme.SPACING.large, paddingLeft: theme.SPACING.medium, paddingRight: theme.SPACING.medium, alignSelf: 'center', width: '100%' }}>
            <View style={{ borderRadius: 8, borderColor: theme.COLORS.border, borderWidth: 1, paddingVertical: theme.SPACING.large, paddingHorizontal: theme.SPACING.medium }}>
                <View style={{ flexDirection: 'row', marginBottom: theme.SPACING.large, width: '100%' }}>
                    <SvgUri uri={getIconUri("trophy.svg")} width={30} height={30} color={theme.COLORS.secondary} />
                    <Text style={{ marginLeft: theme.SPACING.small, fontSize: theme.FONT_SIZES.subtitle, fontWeight: '700', color: theme.COLORS.textPrimary }}>Classement des amis</Text>
                </View>
                {!isAuthenticated ? (
                    <PlaceholderNotConnected
                        icon="group.svg"
                        message="Connectez-vous pour pouvoir ajouter des amis et voir leur progression !"
                        buttonText="Se connecter →"
                        onPress={() => router.push('/connection')}
                    />
                ) : (
                    <Text style={{ fontSize: theme.FONT_SIZES.text, color: theme.COLORS.textSecondary, textAlign: 'center' }}>Liste des amis à venir</Text>
                )}
            </View>
        </View>
    );
}
