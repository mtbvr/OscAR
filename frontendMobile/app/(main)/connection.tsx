import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgUri } from 'react-native-svg';
import { Asset } from 'expo-asset';
import { theme, globalStyles } from '../../constants/theme';

// Connection screen 

export default function ConnexionScreen() {
    const router = useRouter();

    // Get URI from icon module
    function getIconUri(iconSource: number): string {
        return Asset.fromModule(iconSource).uri || '';
    }

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[theme.COLORS.primary, theme.COLORS.secondary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={[theme.CONTAINER_STYLES.center]}
            >
                <View style={[{ backgroundColor: theme.COLORS.background, borderRadius: 18, paddingHorizontal: theme.SPACING.large, paddingVertical: theme.SPACING.xLarge, width: '85%' }]}>
                    <Text style={[globalStyles.title, { textAlign: 'center' }]}>LOOTOPIA</Text>
                    <Text style={[globalStyles.smallText, { textAlign: 'center', marginTop: theme.SPACING.small, marginBottom: theme.SPACING.xLarge }]}>
                        La chasse vous attend !
                    </Text>

                    {/* Input Email */}
                    <View style={[{ paddingBottom: theme.SPACING.medium }]}>
                        <Text style={[globalStyles.label, { paddingBottom: theme.SPACING.small }]}>Email</Text>
                        <View style={theme.INPUT_STYLES.container}>
                            <SvgUri
                                uri={getIconUri(require('../../assets/icon/mail.svg'))}
                                width={20}
                                height={20}
                                style={{ marginRight: theme.SPACING.small }}
                                color={theme.COLORS.placeholder}
                            />
                            <TextInput
                                style={[theme.INPUT_STYLES.text, { paddingVertical: theme.SPACING.medium }]}
                                placeholder="votre@email.com"
                                placeholderTextColor={theme.COLORS.placeholder}
                                keyboardType="email-address"
                            />
                        </View>
                    </View>

                    {/* Input Password */}
                    <View>
                        <Text style={[globalStyles.label, { paddingBottom: theme.SPACING.small }]}>Mot de passe</Text>
                        <View style={[theme.INPUT_STYLES.container, { marginBottom: theme.SPACING.small }]}>
                            <SvgUri
                                uri={getIconUri(require('../../assets/icon/lock.svg'))}
                                width={20}
                                height={20}
                                style={{ marginRight: theme.SPACING.small }}
                                color={theme.COLORS.placeholder}
                            />
                            <TextInput
                                style={[theme.INPUT_STYLES.text, { paddingVertical: theme.SPACING.medium }]}
                                placeholder="************"
                                placeholderTextColor={theme.COLORS.placeholder}
                                secureTextEntry
                            />
                        </View>

                        {/* Link "Forgot Password?" */}
                        <TouchableOpacity onPress={() => router.push('/forgot-password')} activeOpacity={0.7}>
                            <Text style={[globalStyles.tinyText, { color: theme.COLORS.secondary, marginBottom: theme.SPACING.large, fontWeight: '600' }]}>
                                Mot de passe oublié ?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Button "Sign In" */}
                    <TouchableOpacity style={[theme.BUTTON_STYLES.default, { width: '100%' }]}>
                        <LinearGradient
                            colors={[theme.COLORS.primary, theme.COLORS.secondary]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={[theme.BUTTON_STYLES.default, { width: '100%' }]}
                        >
                            <Text style={[globalStyles.text, { color: theme.COLORS.background, fontWeight: '900', paddingHorizontal: theme.SPACING.large }]}>
                                Se connecter
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    {/* Link "Sign Up" */}
                    <View style={{ marginTop: theme.SPACING.medium, marginBottom: theme.SPACING.large }}>
                        <Text style={globalStyles.tinyText}>Vous n'avez pas encore de compte ?</Text>
                        <TouchableOpacity onPress={() => router.push('/inscription')} activeOpacity={0.7}>
                            <Text style={[globalStyles.tinyText, { color: theme.COLORS.secondary, fontWeight: '600' }]}>
                                Inscrivez-vous !
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Back Button */}
                    <TouchableOpacity style={[theme.BUTTON_STYLES.default, { flexDirection: 'row', gap: theme.SPACING.small }]} onPress={() => router.push('/')} activeOpacity={0.7}>
                        <Ionicons name="arrow-back" size={24} color={theme.COLORS.icon} />
                        <Text style={[globalStyles.text, { color: theme.COLORS.icon, fontWeight: '700' }]}>
                            Retour au menu
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
}
