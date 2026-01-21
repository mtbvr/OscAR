import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen name="(main)" options={{ headerShown: false }} />
            <Stack.Screen name="connexion" />
            <Stack.Screen name="profil" />
            <Stack.Screen name="inscription" />
        </Stack>
    );
}
