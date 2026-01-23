import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { theme, globalStyles } from '../../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgUri } from 'react-native-svg';
import { Asset } from 'expo-asset';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

// Icon mapping
const ICONS = {
    "clock.svg": require('../../assets/icon/clock.svg'),
    "check.svg": require('../../assets/icon/check.svg'),
    "target.svg": require('../../assets/icon/target.svg'),
    "target-larger.svg": require('../../assets/icon/target-larger.svg'),
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

// HuntSection component for each section (Current Hunts, Completed Hunts)
const HuntSection = ({ title, icon, placeholderIcon, placeholderMessage, buttonText, isAuthenticated }: { title: string; icon: IconName; placeholderIcon: IconName; placeholderMessage: string; buttonText: string; isAuthenticated: boolean }) => {
    const router = useRouter();

    return (
        <View style={{ flexDirection: 'column', marginTop: theme.SPACING.medium }}>
            <View style={{ flexDirection: 'row', marginBottom: theme.SPACING.medium }}>
                <SvgUri uri={getIconUri(icon)} width={20} height={20} color={icon === "check.svg" ? theme.COLORS.success : theme.COLORS.primary} style={{ marginRight: 3 }} />
                <Text style={{ ...globalStyles.subtitle, fontSize: theme.FONT_SIZES.text, marginLeft: theme.SPACING.small }}>{title}</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 12, backgroundColor: '#ededed', paddingHorizontal: theme.SPACING.medium, paddingVertical: theme.SPACING.large, borderColor: '#C2C2C2', borderWidth: 1 }}>
                {isAuthenticated ? (
                    <Text style={{ textAlign: 'center', color: theme.COLORS.textSecondary }}>Logique d'affichage des chasses en fonction de la connexion ici</Text>
                ) : (
                    <>
                        <SvgUri uri={getIconUri(placeholderIcon)} width={50} height={50} color={"#cccccc"} style={{ marginBottom: theme.SPACING.medium }} />
                        <Text style={{ textAlign: 'center', color: '#a0a0a0', marginBottom: theme.SPACING.medium }}>{placeholderMessage}</Text>
                        <TouchableOpacity style={[theme.BUTTON_STYLES.default, { width: '100%' }]} onPress={() => router.push('/connection')}>
                            <LinearGradient colors={[theme.COLORS.primary, theme.COLORS.secondary]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[theme.BUTTON_STYLES.default, { width: '100%' }]}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontWeight: '700' }}>{buttonText}</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    );
};

// Hunt screen
export default function HuntScreen() {
    const { isAuthenticated } = useAuth();

    return (
        <View style={{ paddingVertical: theme.SPACING.large, paddingHorizontal: theme.SPACING.large, flex: 1 }}>
            <Text style={{ ...globalStyles.subtitle, fontWeight: '800' }}>Mes Chasses</Text>
            <HuntSection
                title="Chasses en cours (0)"
                icon="clock.svg"
                placeholderIcon="target-larger.svg"
                placeholderMessage="Connectez-vous pour pouvoir voir vos chasses en cours !"
                buttonText="Se connecter"
                isAuthenticated={isAuthenticated}
            />
            <HuntSection
                title="Chasses complétées (0)"
                icon="check.svg"
                placeholderIcon="target-larger.svg"
                placeholderMessage="Connectez-vous pour pouvoir enregistrer votre progression !"
                buttonText="Se connecter"
                isAuthenticated={isAuthenticated}
            />
        </View>
    );
}