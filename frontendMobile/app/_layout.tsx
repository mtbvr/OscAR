import { Stack } from 'expo-router';

// Root layout defining the main navigation stack

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen name="(main)" options={{ headerShown: false }} />
            <Stack.Screen name="connection" />
            <Stack.Screen name="profil" />
            <Stack.Screen name="inscription" />
        </Stack>
    );
}
