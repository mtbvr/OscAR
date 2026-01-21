import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Asset } from 'expo-asset';
import { useRouter, usePathname } from 'expo-router';

// Navbar colors
const COLORS = {
    inactive: '#393939',
    active: '#F7B32B',
    background: '#FEFEFE',
    border: '#F7B32B',
};

// Icon paths
const ICON_PATHS = {
    index: require('../../assets/icon/map.svg'),
    chasses: require('../../assets/icon/target.svg'),
    social: require('../../assets/icon/loyalty-points.svg'),
    connexion: require('../../assets/icon/user.svg'),
};

// TODO: Replace with real authentication context
const useAuth = () => {
    const [isAuthenticated] = useState(false); // Change to true to test profil
    return { isAuthenticated };
};

// Get URI from icon module
function getIconUri(iconSource: number): string {
    return Asset.fromModule(iconSource).uri || '';
}

// Normalize routes to ignore the /(main) prefix
function normalizeRoute(route: string): string {
    return route.replace('/(main)', '');
}

// Tab interface
interface Tab {
    key: string;
    label: string;
    route: string;
    icon: number;
}

// Bottom navigation bar component
interface BottomNavbarProps {
    currentRoute?: string;
    onNavigate?: (route: string) => void;
}

export default function BottomNavbar({ currentRoute, onNavigate }: BottomNavbarProps) {
    const router = useRouter();
    const pathname = currentRoute || usePathname();
    const { isAuthenticated } = useAuth();

    // Define tabs with conditional Connexion/Profil tab
    const connexionTab = {
        key: 'connexion',
        label: isAuthenticated ? 'Profil' : 'Connexion',
        route: isAuthenticated ? '/profil' : '/connexion',
        icon: ICON_PATHS.connexion,
    };

    // Tabs array
    const tabs: Tab[] = [
        { key: 'index', label: 'Maps', route: '/(main)', icon: ICON_PATHS.index },
        { key: 'chasses', label: 'Chasses', route: '/(main)/chasses', icon: ICON_PATHS.chasses },
        { key: 'social', label: 'Social', route: '/(main)/social', icon: ICON_PATHS.social },
        connexionTab,
    ];

    // Render the bottom navigation bar using the tabs defined
    return (
        <View style={styles.container}>
        {tabs.map((tab) => {
            const isActive =
            (tab.key === 'index' && (pathname === '/' || normalizeRoute(pathname) === normalizeRoute(tab.route))) ||
            normalizeRoute(pathname) === normalizeRoute(tab.route);
            const itemColor = isActive ? COLORS.active : COLORS.inactive;
            const iconUri = getIconUri(tab.icon);

            return (
            <TouchableOpacity
                key={tab.key}
                style={styles.tabButton}
                onPress={() => onNavigate ? onNavigate(tab.route) : router.push(tab.route as any)}
                activeOpacity={0.7}
            >
                {iconUri && (
                <SvgUri
                    uri={iconUri}
                    width={28}
                    height={28}
                    color={itemColor}
                />
                )}
                <Text style={[styles.label, { color: itemColor }]}>
                {tab.label}
                </Text>
            </TouchableOpacity>
            );
        })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80,
        paddingTop: 40,
        paddingHorizontal: 8,
        backgroundColor: COLORS.background,
        borderTopWidth: 3,
        borderTopColor: COLORS.border,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        gap: 6,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 2,
    },
});
