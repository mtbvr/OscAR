import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { theme } from '../../constants/theme';
import StatsCard from '../../components/ui/StatsCard';
import { SvgUri } from 'react-native-svg';
import { Asset } from 'expo-asset';

// Icon mapping
const ICONS = {
    "image-placeholder.svg": require('../../assets/icon/image-placeholder.svg'),
    "logout.svg": require('../../assets/icon/logout.svg'),
} as const;

// Function to get the URI of the SVG icon
function getIconUri(iconName: keyof typeof ICONS): string {
    const iconSource = ICONS[iconName];
    return Asset.fromModule(iconSource).uri || '';
}

// Profil screen
export default function ProfilScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: theme.COLORS.background }}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: theme.SPACING.medium, paddingVertical: theme.SPACING.xLarge }}>
                {/* Profile Picture */}
                <View style={{ alignItems: 'center', marginBottom: theme.SPACING.large }}>
                    <View style={{ width: 140, height: 140, borderRadius: 500, backgroundColor: '#dfdfdf', justifyContent: 'center', alignItems: 'center' }}>
                        <SvgUri uri={getIconUri("image-placeholder.svg")} width={60} height={60} color={theme.COLORS.background} />
                    </View>
                    <Text style={{ fontSize: 25, fontWeight: '700', color: theme.COLORS.textPrimary, marginTop: theme.SPACING.small }}>Pseudo</Text>
                </View>

                {/* Stats Section */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: theme.SPACING.large }}>
                    <StatsCard icon="target-larger.svg" value={0} label="Chasse" backgroundColor="#fce4ec" iconColor={theme.COLORS.primary} width={30} height={30} />
                    <StatsCard icon="pin.svg" value={0} label="Centre Culturel" backgroundColor="#fff9c4" iconColor={theme.COLORS.secondary} width={30} height={30} />
                    <StatsCard icon="group.svg" value={0} label="Amis" backgroundColor="#e3f2fd" iconColor={theme.COLORS.tertiary} width={35} height={35} />
                </View>

                {/* Buttons */}
                <TouchableOpacity style={{ width: '100%', paddingVertical: theme.SPACING.medium, borderRadius: 12, backgroundColor: theme.COLORS.background, borderWidth: 1, borderColor: theme.COLORS.border, marginBottom: theme.SPACING.medium }}>
                    <Text style={{ fontSize: theme.FONT_SIZES.text, fontWeight: '700', color: theme.COLORS.textPrimary, textAlign: 'center' }}>Modifier mon profil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%', paddingVertical: theme.SPACING.medium, borderRadius: 12, backgroundColor: '#ffebee', borderWidth: 1, borderColor: theme.COLORS.error }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: theme.SPACING.small }}>
                        <Text style={{ fontSize: theme.FONT_SIZES.text, fontWeight: '700', color: theme.COLORS.error }}>Déconnexion</Text>
                        <SvgUri uri={getIconUri("logout.svg")} width={25} height={25} color={theme.COLORS.error} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
