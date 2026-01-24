import React from 'react';
import { View, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { theme } from '../../constants/theme';
import PlaceholderNotConnected from '../../components/placeholder-not-connected';
import { router } from 'expo-router';
import { Asset } from 'expo-asset';
import { SvgUri } from 'react-native-svg';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Icon mapping
const ICONS = {
    "trophy.svg": require('../../assets/icon/trophy.svg'),
    "envelope.svg": require('../../assets/icon/envelope.svg'),
    "plus.svg": require('../../assets/icon/plus.svg'),
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
        <ScrollView style={{ backgroundColor: theme.COLORS.background }} contentContainerStyle={{ paddingTop: theme.SPACING.small, paddingHorizontal: theme.SPACING.medium, height: '100%' }}>
            
            {/* Friend Requests - Display only if user is authenticated */}
            {isAuthenticated && (
                <View style={{ borderWidth: 1, borderColor: theme.COLORS.border, borderRadius: 8, backgroundColor: theme.COLORS.background, paddingVertical: theme.SPACING.large, paddingHorizontal: theme.SPACING.medium, marginTop: theme.SPACING.medium }}>
                    <View style={{ flexDirection: 'row', marginBottom: theme.SPACING.large, width: '100%' }}>
                        <SvgUri uri={getIconUri("envelope.svg")} width={30} height={30} color={theme.COLORS.success} />
                        <Text style={{ marginLeft: theme.SPACING.small, fontSize: theme.FONT_SIZES.subtitle, fontWeight: '700', color: theme.COLORS.textPrimary }}>Demandes d'amis (0)</Text>
                    </View>
                    <Text style={{ fontSize: theme.FONT_SIZES.text, color: theme.COLORS.textSecondary }}>Liste des demandes d'amis à venir</Text>
                </View>
            )}

            {/* Friends Leaderboard */}
            <View style={{ borderRadius: 8, borderColor: theme.COLORS.border, borderWidth: 1, paddingVertical: theme.SPACING.large, paddingHorizontal: theme.SPACING.medium, marginTop: theme.SPACING.medium }}>
                <View style={{ flexDirection: 'row', marginBottom: theme.SPACING.large, width: '100%' }}>
                    <SvgUri uri={getIconUri("trophy.svg")} width={30} height={30} color={theme.COLORS.secondary} />
                    <Text style={{ marginLeft: theme.SPACING.small, fontSize: theme.FONT_SIZES.subtitle, fontWeight: '700', color: theme.COLORS.textPrimary }}>Classement des Amis</Text>
                </View>
                {!isAuthenticated ? (
                    <PlaceholderNotConnected
                        icon="group.svg"
                        message="Connectez-vous pour pouvoir ajouter des amis et voir leur progression !"
                        buttonText="Se connecter →"
                        onPress={() => router.push('/connection')}
                    />
                ) : (
                    <>
                        <Text style={{ fontSize: theme.FONT_SIZES.text, color: theme.COLORS.textSecondary }}>Liste des amis à venir</Text>

                        {/* All friends button */}
                        <TouchableOpacity style={[{ width: '100%', marginTop: theme.SPACING.medium }]} onPress={() => router.push('/social-friends')}>
                            <LinearGradient
                                colors={[theme.COLORS.primary, theme.COLORS.secondary]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={[theme.BUTTON_STYLES.default, { width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 20, height: 35 }]}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: theme.SPACING.small }}>
                                    <Text style={[{ fontSize: theme.FONT_SIZES.text, color: theme.COLORS.background, fontWeight: '700' }]}>
                                        Voir plus 
                                    </Text>
                                    <SvgUri uri={getIconUri("plus.svg")} width={20} height={20} color={theme.COLORS.background} />
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </>
                )}
            </View>

            {/* Global Leaderboard */}
            <View style={{ borderWidth: 1, borderColor: theme.COLORS.border, borderRadius: 8, backgroundColor: theme.COLORS.background, paddingVertical: theme.SPACING.large, paddingHorizontal: theme.SPACING.medium, marginTop: theme.SPACING.medium }}>
                <View style={{ flexDirection: 'row', marginBottom: theme.SPACING.large, width: '100%' }}>
                    <SvgUri uri={getIconUri("trophy.svg")} width={30} height={30} color={theme.COLORS.secondary} />
                    <Text style={{ marginLeft: theme.SPACING.small, fontSize: theme.FONT_SIZES.subtitle, fontWeight: '700', color: theme.COLORS.textPrimary }}>Classement Global</Text>
                </View>
                <Text style={{ fontSize: theme.FONT_SIZES.text, color: theme.COLORS.textSecondary }}>Liste des meilleurs joueurs à venir</Text>
                
                {/* All leaderboard informations */}
                <TouchableOpacity style={[{ width: '100%', marginTop: theme.SPACING.medium }]} onPress={() => router.push('/social-leaderboard')}>
                    <LinearGradient
                        colors={[theme.COLORS.primary, theme.COLORS.secondary]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={[theme.BUTTON_STYLES.default, { width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 20, height: 35 }]}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: theme.SPACING.small }}>
                            <Text style={[{ fontSize: theme.FONT_SIZES.text, color: theme.COLORS.background, fontWeight: '700' }]}>
                                Voir plus 
                            </Text>
                            <SvgUri uri={getIconUri("plus.svg")} width={20} height={20} color={theme.COLORS.background} />
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
