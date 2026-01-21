import { Tabs } from 'expo-router';
import { SvgUri } from 'react-native-svg';
import { StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';


/* This component is used as the bottom tab navigator for the app */

// Icon paths for each tab
const ICON_PATHS = {
    index: require('../../assets/icon/map.svg'),
    chasses: require('../../assets/icon/target.svg'),
    social: require('../../assets/icon/loyalty-points.svg'),
    connexion: require('../../assets/icon/user.svg'),
} as const;

// Function to get the URI of an SVG icon from a require
function getIconUri(source: number) {
    return Asset.fromModule(source).uri || '';
}

export default function TabsLayout() {
    return (
        <Tabs
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#F7B32B',
            tabBarInactiveTintColor: '#393939',
            tabBarLabelStyle: styles.tabLabel,
            tabBarIconStyle: styles.tabIcon,
            tabBarStyle: styles.tabBar,
            tabBarIcon: ({ color, size }) => {
                const iconSource = ICON_PATHS[route.name as keyof typeof ICON_PATHS];
                const uri = iconSource ? getIconUri(iconSource) : undefined;
                if (!uri) return null;
                return (
                    <SvgUri
                        uri={uri}
                        width={size + 4}
                        height={size + 4}
                        color={color}
                    />
                );
            },
        })}
        >
        <Tabs.Screen name="index" options={{ title: 'Maps' }} />
        <Tabs.Screen name="chasses" options={{ title: 'Chasses' }} />
        <Tabs.Screen name="social" options={{ title: 'Social' }} />
        <Tabs.Screen name="connexion" options={{ title: 'Connexion' }} />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#FEFEFE',
        borderTopColor: '#F7B32B',
        borderTopWidth: 3,
        height: 110,
        paddingBottom: 20,
        paddingTop: 20,
        paddingHorizontal: 8,
    },
    tabLabel: {
        marginTop: 6,
        fontWeight: '600',
        fontSize: 12,
    },
    tabIcon: {
        marginBottom: 2,
    },
});
