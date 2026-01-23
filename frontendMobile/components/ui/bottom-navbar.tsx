import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Asset } from 'expo-asset';
import { useRouter, usePathname } from 'expo-router';
import { theme } from '../../constants/theme';
import { useAuth } from '../../context/AuthContext'; // Import centralisé

// Icon paths
const ICON_PATHS = {
    index: require('../../assets/icon/map.svg'),
    hunt: require('../../assets/icon/target.svg'),
    social: require('../../assets/icon/loyalty-points.svg'),
    connexion: require('../../assets/icon/user.svg'),
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

    // Define tabs with conditional Connection/Profil tab
    const connectionTab = {
        key: 'connection',
        label: isAuthenticated ? 'Profil' : 'Connexion',
        route: isAuthenticated ? '/profil' : '/connection',
        icon: ICON_PATHS.connexion,
    };

    // Tabs array
    const tabs: Tab[] = [
        { key: 'index', label: 'Maps', route: '/(main)', icon: ICON_PATHS.index },
        { key: 'hunt', label: 'Chasses', route: '/(main)/hunt', icon: ICON_PATHS.hunt },
        { key: 'social', label: 'Social', route: '/(main)/social', icon: ICON_PATHS.social },
        connectionTab,
    ];

    // Render the bottom navigation bar using the tabs defined
    return (
        <View style={styles.container}>
            {tabs.map((tab) => {
                const isActive =
                    (tab.key === 'index' && (pathname === '/' || normalizeRoute(pathname) === normalizeRoute(tab.route))) ||
                    normalizeRoute(pathname) === normalizeRoute(tab.route);
                const itemColor = isActive ? theme.COLORS.active : theme.COLORS.inactive;
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
        paddingTop: theme.SPACING.large,
        paddingHorizontal: theme.SPACING.small,
        backgroundColor: theme.COLORS.background,
        borderTopWidth: 3,
        borderTopColor: theme.COLORS.active,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: theme.SPACING.small,
        gap: theme.SPACING.small,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 2,
    },
});
