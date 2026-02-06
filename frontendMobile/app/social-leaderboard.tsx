import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../constants/theme';
import { Asset } from 'expo-asset';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import HeaderNavbar from '@/components/ui/header-navbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavbar from '@/components/ui/bottom-navbar';
import SectionTitle from '../components/section-title';

// Icon mapping
const ICONS = {
    "trophy.svg": require('../assets/icon/trophy.svg'),
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

// Social Leaderboard screen

export default function SocialLeaderboardScreen() {
    const router = useRouter();
        
  return (
    <SafeAreaView style={{backgroundColor: theme.COLORS.background, flex: 1}}>
        <HeaderNavbar/>

        <View style={{flex: 1, paddingHorizontal: theme.SPACING.large, paddingVertical: theme.SPACING.medium}}>

            {/* Back Button */}
            <TouchableOpacity style={[theme.BUTTON_STYLES.default, { flexDirection: 'row', gap: theme.SPACING.medium, justifyContent: 'flex-start' }]} onPress={() => router.push('/social')} activeOpacity={0.7}>
                <Ionicons name="arrow-back" size={24} color={theme.COLORS.icon} />
                <Text style={[{ color: theme.COLORS.icon, fontWeight: '500', fontSize: 20 }]}>
                    Retour au Social
                </Text>
            </TouchableOpacity>

            {/* Global Leaderboard */}
            <View style={{ borderWidth: 1, borderColor: theme.COLORS.border, borderRadius: 8, backgroundColor: theme.COLORS.background, paddingVertical: theme.SPACING.large, paddingHorizontal: theme.SPACING.medium, marginTop: theme.SPACING.medium }}>
                <SectionTitle 
                    title="Classement Global" 
                    iconUri={getIconUri("trophy.svg")} 
                    iconColor={theme.COLORS.secondary} 
                />
                <Text style={{ fontSize: theme.FONT_SIZES.text, color: theme.COLORS.textSecondary }}>Liste des meilleurs joueurs à venir</Text>
            </View>
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <BottomNavbar/>
        </View>
    </SafeAreaView>
  );
}
