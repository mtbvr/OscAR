import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../constants/theme';
import { SvgUri } from 'react-native-svg';
import { Asset } from 'expo-asset';
import { LinearGradient } from 'expo-linear-gradient';

// Icon mapping
const ICONS = {
    "lock.svg": require('../assets/icon/lock.svg'),
    "lock-larger.svg": require('../assets/icon/lock-larger.svg'),
} as const;

// Function to get the URI of the SVG icon
function getIconUri(iconName: keyof typeof ICONS): string {
    const iconSource = ICONS[iconName];
    return Asset.fromModule(iconSource).uri || '';
}

// ModifyPassword component
const ModifyPassword: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <View style={{ flex: 1, backgroundColor: theme.COLORS.background, paddingHorizontal: theme.SPACING.small, paddingVertical: theme.SPACING.xLarge, borderRadius: 12, width: '90%' }}>
            {/* Lock Icon */}
            <View style={{ alignItems: 'center', marginBottom: theme.SPACING.large }}>
                <View style={{ width: 80, height: 80, borderRadius: 500, backgroundColor: theme.COLORS.error, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgUri uri={getIconUri("lock-larger.svg")} width={60} height={60} color={theme.COLORS.background} />
                </View>
                <Text style={{ fontSize: 20, fontWeight: '800', color: theme.COLORS.textPrimary, marginTop: theme.SPACING.medium }}>Modifiez votre mot de passe</Text>
            </View>

            {/* Password Fields */}
            <View style={{ marginBottom: theme.SPACING.medium }}>
                <Text style={{ fontSize: theme.FONT_SIZES.smallText, color: theme.COLORS.textSecondary, marginBottom: theme.SPACING.small }}>Mot de passe actuel</Text>
                <View style={[theme.INPUT_STYLES.container, { gap: theme.SPACING.medium }]}>
                    <SvgUri uri={getIconUri("lock.svg")} width={20} height={20} color={theme.COLORS.placeholder} />
                    <TextInput
                        style={[theme.INPUT_STYLES.text, { paddingVertical: theme.SPACING.medium }]}
                        placeholder="********"
                        placeholderTextColor={theme.COLORS.placeholder}
                        secureTextEntry
                    />
                </View>
            </View>
            <View style={{ marginBottom: theme.SPACING.medium }}>
                <Text style={{ fontSize: theme.FONT_SIZES.smallText, color: theme.COLORS.textSecondary, marginBottom: theme.SPACING.small }}>Nouveau mot de passe</Text>
                <View style={[theme.INPUT_STYLES.container, { gap: theme.SPACING.medium }]}>
                    <SvgUri uri={getIconUri("lock.svg")} width={20} height={20} color={theme.COLORS.placeholder} />
                    <TextInput
                        style={[theme.INPUT_STYLES.text, { paddingVertical: theme.SPACING.medium }]}
                        placeholder="********"
                        placeholderTextColor={theme.COLORS.placeholder}
                        secureTextEntry
                    />
                </View>
            </View>
            <View style={{ marginBottom: theme.SPACING.medium }}>
                <Text style={{ fontSize: theme.FONT_SIZES.smallText, color: theme.COLORS.textSecondary, marginBottom: theme.SPACING.small }}>Confirmez le nouveau mot de passe</Text>
                <View style={[theme.INPUT_STYLES.container, { gap: theme.SPACING.medium }]}>
                    <SvgUri uri={getIconUri("lock.svg")} width={20} height={20} color={theme.COLORS.placeholder} />
                    <TextInput
                        style={[theme.INPUT_STYLES.text, { paddingVertical: theme.SPACING.medium }]}
                        placeholder="********"
                        placeholderTextColor={theme.COLORS.placeholder}
                        secureTextEntry
                    />
                </View>
            </View>

            {/* Save Button */}
            <TouchableOpacity activeOpacity={0.7}>
                <LinearGradient
                    colors={[theme.COLORS.primary, theme.COLORS.secondary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[{ width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }]}
                >
                    <Text style={{ color: theme.COLORS.background, fontWeight: '700', paddingVertical: theme.SPACING.medium }}>Enregistrer la modification</Text>
                </LinearGradient>
            </TouchableOpacity>

            {/* Back Button */}
            <TouchableOpacity style={{ marginTop: theme.SPACING.xLarge, alignSelf: 'center' }} onPress={onClose}>
                <Text style={{ fontSize: theme.FONT_SIZES.text, color: theme.COLORS.textSecondary }}>← Annuler</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ModifyPassword;