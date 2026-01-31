import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Modal, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { globalStyles, theme } from '../constants/theme';
import { SvgUri } from 'react-native-svg';
import { Asset } from 'expo-asset';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import HeaderNavbar from '@/components/ui/header-navbar';
import BottomNavbar from '@/components/ui/bottom-navbar';
import { Ionicons } from '@expo/vector-icons';
import ModifyPassword from '../components/modify-password';

// Icon mapping
const ICONS = {
    "image-placeholder.svg": require('../assets/icon/image-placeholder.svg'),
} as const;

// Function to get the URI of the SVG icon
function getIconUri(iconName: keyof typeof ICONS): string {
    const iconSource = ICONS[iconName];
    return Asset.fromModule(iconSource).uri || '';
}

// Profil Modify screen
export default function ProfilModifyScreen() {
    const router = useRouter();
    const [showModifyPassword, setShowModifyPassword] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.background }}>
            <HeaderNavbar />
            <ScrollView contentContainerStyle={{ paddingHorizontal: theme.SPACING.large, paddingTop: theme.SPACING.medium, paddingBottom: theme.SPACING.xLarge }}>
                {/* Back Button */}
                <View style={{ alignItems: 'flex-start', marginBottom: theme.SPACING.large }}>
                    <TouchableOpacity style={[theme.BUTTON_STYLES.default, { flexDirection: 'row', gap: theme.SPACING.medium, justifyContent: 'flex-start' }]} onPress={() => router.push('/profil')}>
                        <Ionicons name="arrow-back" size={24} color={theme.COLORS.icon} />
                        <Text style={{ color: theme.COLORS.icon, fontWeight: '500', fontSize: 20 }}>Retour au Profil</Text>
                    </TouchableOpacity>
                </View>

                {/* Profile Picture */}
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: 140, height: 140, borderRadius: 500, backgroundColor: '#dfdfdf', justifyContent: 'center', alignItems: 'center' }}>
                        <SvgUri uri={getIconUri("image-placeholder.svg")} width={60} height={60} color={theme.COLORS.background} />
                    </View>
                    <View style={{ alignItems: 'flex-start', marginBottom: theme.SPACING.large }}>
                        <TouchableOpacity style={[theme.BUTTON_STYLES.default, { flexDirection: 'row', gap: theme.SPACING.medium, justifyContent: 'flex-start' }]}>
                            <TextInput style={[{ fontSize: theme.FONT_SIZES.subtitle, fontWeight: '700' }]} placeholder="Pseudo" placeholderTextColor={theme.COLORS.textPrimary} keyboardType="default" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Form Fields */}
                <View>
                    {/* First Name */}
                    <View style={{ marginBottom: theme.SPACING.medium }}>
                        <Text style={[globalStyles.label, { paddingBottom: theme.SPACING.small }]}>Prénom</Text>
                        <View style={theme.INPUT_STYLES.container}>
                            <TextInput style={[theme.INPUT_STYLES.text, { paddingVertical: theme.SPACING.medium }]} placeholder="Jean" placeholderTextColor={theme.COLORS.placeholder} keyboardType="default" />
                        </View>
                    </View>

                    {/* Last Name */}
                    <View style={{ marginBottom: theme.SPACING.medium }}>
                        <Text style={[globalStyles.label, { paddingBottom: theme.SPACING.small }]}>Nom</Text>
                        <View style={theme.INPUT_STYLES.container}>
                            <TextInput style={[theme.INPUT_STYLES.text, { paddingVertical: theme.SPACING.medium }]} placeholder="Dupont" placeholderTextColor={theme.COLORS.placeholder} keyboardType="default" />
                        </View>
                    </View>

                    {/* Email */}
                    <View style={{ marginBottom: theme.SPACING.medium }}>
                        <Text style={[globalStyles.label, { paddingBottom: theme.SPACING.small }]}>Adresse email</Text>
                        <View style={theme.INPUT_STYLES.container}>
                            <TextInput style={[theme.INPUT_STYLES.text, { paddingVertical: theme.SPACING.medium }]} placeholder="votre@email.com" placeholderTextColor={theme.COLORS.placeholder} keyboardType="email-address" />
                        </View>
                    </View>

                    {/* Phone Number */}
                    <View style={{ marginBottom: theme.SPACING.medium }}>
                        <Text style={[globalStyles.label, { paddingBottom: theme.SPACING.small }]}>Numéro de téléphone</Text>
                        <View style={theme.INPUT_STYLES.container}>
                            <TextInput style={[theme.INPUT_STYLES.text, { paddingVertical: theme.SPACING.medium }]} placeholder="0123456789" placeholderTextColor={theme.COLORS.placeholder} keyboardType="phone-pad" />
                        </View>
                    </View>

                    {/* Save Modifications Button */}
                    <TouchableOpacity activeOpacity={0.7}>
                        <LinearGradient colors={[theme.COLORS.primary, theme.COLORS.secondary]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[{ width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }]}>
                            <Text style={[globalStyles.text, { color: theme.COLORS.background, fontWeight: '700', paddingVertical: theme.SPACING.medium }]}>Enregistrer les modifications</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={{ borderRadius: 8, borderColor: theme.COLORS.border, borderWidth: 1, paddingVertical: theme.SPACING.medium, paddingHorizontal: theme.SPACING.large, marginTop: theme.SPACING.large, gap: theme.SPACING.medium }}>
                        <Text style={[globalStyles.label, { paddingBottom: theme.SPACING.small }]}>Zone sensible</Text>

                        {/* Modify Password Button */}
                        <TouchableOpacity activeOpacity={0.7} style={{ width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: '#ffb7c1', borderWidth: 1, borderColor: theme.COLORS.error }} onPress={() => setShowModifyPassword(true)}>
                            <Text style={[globalStyles.text, { fontWeight: '800', paddingVertical: theme.SPACING.medium }]}>Modifier mon mot de passe</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Modal for ModifyPassword */}
            <Modal visible={showModifyPassword} animationType="fade" transparent>
                <TouchableWithoutFeedback onPress={() => setShowModifyPassword(false)}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingVertical: 105, paddingHorizontal: theme.SPACING.small }}>
                        <TouchableWithoutFeedback>
                            <View style={{ backgroundColor: theme.COLORS.background, borderRadius: 12, padding: theme.SPACING.large, alignSelf: 'center' }}>
                                <ModifyPassword onClose={() => setShowModifyPassword(false)} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <BottomNavbar />
        </SafeAreaView>
    );
}
