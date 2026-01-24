import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { theme, globalStyles } from '../constants/theme';
import { Asset } from 'expo-asset';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import HeaderNavbar from '@/components/ui/header-navbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavbar from '@/components/ui/bottom-navbar';
import { SvgUri } from 'react-native-svg';

// Icon mapping
const ICONS = {
    "trophy.svg": require('../assets/icon/trophy.svg'),
    "plus.svg": require('../assets/icon/plus.svg'),
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

// Social Friends screen

export default function SocialFriendsScreen() {
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

            {/* Friends Leaderboard */}
            <View style={{ borderRadius: 8, borderColor: theme.COLORS.border, borderWidth: 1, paddingVertical: theme.SPACING.large, paddingHorizontal: theme.SPACING.medium, marginTop: theme.SPACING.medium }}>
                <View style={{ flexDirection: 'row', marginBottom: theme.SPACING.large, width: '100%' }}>
                    <SvgUri uri={getIconUri("trophy.svg")} width={30} height={30} color={theme.COLORS.secondary} />
                    <Text style={{ marginLeft: theme.SPACING.small, fontSize: theme.FONT_SIZES.subtitle, fontWeight: '700', color: theme.COLORS.textPrimary }}>Classement des Amis</Text>
                </View>
                <Text style={{ fontSize: theme.FONT_SIZES.text, color: theme.COLORS.textSecondary }}>Liste détaillée des amis à venir.</Text>
                
                {/* Add friends button */}
                <TouchableOpacity style={[{ width: '100%', marginTop: theme.SPACING.medium, backgroundColor: '#d1f2cd', paddingVertical: theme.SPACING.medium, borderRadius: 12 }]} onPress={() => router.push('/')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: theme.SPACING.small }}>
                        <Text style={[{ fontSize: theme.FONT_SIZES.text, color: theme.COLORS.textPrimary, fontWeight: '700' }]}>
                            Ajouter des amis
                        </Text>
                        <SvgUri uri={getIconUri("plus.svg")} width={20} height={20} color={theme.COLORS.textPrimary} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <BottomNavbar/>
        </View>
    </SafeAreaView>
  );
}
